import getAllPosts from "@lib/requests/getAllPosts";
import getInThePressPosts from "@lib/requests/getInThePressPosts";
import getSearchResults from "@lib/requests/getSearchResults";
import getCategoryPosts from "@lib/requests/getCategoryPosts";
import getAuthorPosts from "@lib/requests/getAuthorPosts";
import getTagPosts from "@lib/requests/getTagPosts";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { isInThePressPage, isSearchPage, isAuthorPage, isTagPage, isCategoryPage, locale, endCursor, data } = body;

  if (req.method === "POST") {
    const response = isInThePressPage ? (
      await getInThePressPosts(locale, 5, `"${endCursor}"`)
    ) : isSearchPage ? (
      await getSearchResults(locale, 5, `"${endCursor}"`, data)
    ) : isAuthorPage ? (
      await getAuthorPosts(locale, 6, `"${endCursor}"`, data)
    ) : isTagPage ? (
      await getTagPosts(locale, 6, `"${endCursor}"`, data)
    ) : isCategoryPage ? (
      await getCategoryPosts(locale, 6, `"${endCursor}"`, data)
    ) : (
      await getAllPosts(locale, 6, `"${endCursor}"`, "")
    );

    return res.json({ data: response });
  } else {
    return res.status(500).end();
  }
};