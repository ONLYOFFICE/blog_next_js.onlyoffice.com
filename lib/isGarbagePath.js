// Cheap pre-filter for the catch-all post route (pages/[...post].js).
//
// The route uses `fallback: "blocking"`, so any path that isn't in the
// pre-generated list triggers a `post(id:"<uri>", idType:URI)` GraphQL query
// against WordPress — each unique URI is a cache miss that runs a heavy WPML
// JOIN. External bots hammer non-existent paths (<real-post>/redirect.php,
// /proxy.php, backslash/traversal probes), and every one of those reaches WP.
//
// This filter rejects paths that CANNOT be a real WordPress slug BEFORE the
// GraphQL request, returning a 404 for free. It is deliberately conservative:
// it only matches structural garbage (file extensions, protocols, backslashes,
// path traversal, control chars, encoded traversal). Anything that looks like a
// plausible slug — including posts created after the last build and non-latin
// (ja / zh / ar) slugs, plain or percent-encoded — passes through untouched.

// Script/asset extensions that a sanitized WordPress slug never carries.
// WordPress `sanitize_title()` strips dots, so any segment ending in one of
// these is a probe, not a post.
const GARBAGE_EXTENSIONS = [
  ".php", ".php3", ".php4", ".php5", ".php7", ".phtml",
  ".asp", ".aspx", ".jsp", ".jspx", ".cgi", ".pl", ".cfm", ".do", ".action",
  ".env", ".ini", ".conf", ".config", ".sh", ".bash", ".ps1", ".bat", ".cmd",
  ".sql", ".db", ".bak", ".old", ".swp", ".log", ".git", ".svn",
  ".html", ".htm", ".xml", ".json", ".yaml", ".yml", ".txt",
  ".zip", ".tar", ".gz", ".rar", ".7z",
  ".exe", ".dll", ".jar",
];

// Lowercased substrings that only ever appear in probes/injection attempts.
// Kept minimal and unambiguous — none of these can occur in a sanitized slug.
const GARBAGE_MARKERS = [
  "\\",       // backslash — never in a URL path slug
  "//",       // empty segment / protocol-relative open-redirect probe (//evil.com)
  "://",      // embedded protocol (http://, https://)
  "..",       // path traversal
  "%2e%2e",   // encoded ".." (traversal)
  "%5c",      // encoded backslash
  "%00",      // null byte
  "%2f%2f",   // encoded "//"
  "<", ">",   // angle brackets — XSS/scan noise, impossible in a slug
];

// Extensionless probe paths seen in the wild. Matched against the exact last
// path segment only, so a real slug that merely contains one of these words
// (e.g. "wp-login-tips") is not affected.
const KNOWN_PROBES = new Set([
  "wp-login",
  "wp-admin",
  "wp-config",
  "xmlrpc",
  "phpmyadmin",
  "silentsignin",
]);

// Max sane length for a real post URI (date segments + slug). Anything far
// longer is a generated attack string, not a post.
const MAX_URI_LENGTH = 300;

// Raw control characters (null, newline, DEL, etc.) never belong in a path.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\x00-\x1f\x7f]/;

/**
 * Returns true if `uri` cannot be a real post and must be short-circuited to a
 * 404 without querying WordPress.
 *
 * @param {string} uri - the joined catch-all path, e.g. "2026/07/my-post"
 * @returns {boolean}
 */
function isGarbagePath(uri) {
  if (typeof uri !== "string" || uri.length === 0) {
    return true;
  }

  if (uri.length > MAX_URI_LENGTH) {
    return true;
  }

  if (CONTROL_CHARS.test(uri)) {
    return true;
  }

  const lower = uri.toLowerCase();

  if (GARBAGE_MARKERS.some((marker) => lower.includes(marker))) {
    return true;
  }

  // A file extension on any path segment marks a probe.
  const segments = lower.split("/");
  if (segments.some((segment) => GARBAGE_EXTENSIONS.some((ext) => segment.endsWith(ext)))) {
    return true;
  }

  // Exact extensionless probe as the last meaningful segment.
  const nonEmpty = segments.filter(Boolean);
  const last = nonEmpty[nonEmpty.length - 1] ?? "";
  if (KNOWN_PROBES.has(last)) {
    return true;
  }

  return false;
}

export default isGarbagePath;
