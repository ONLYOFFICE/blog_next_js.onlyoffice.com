import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          />
          {/* Google Tag Manager */}
          <Script id="googletagmanager1" strategy="beforeInteractive" dangerouslySetInnerHTML={{
            __html: `
              (function(a, s, y, n, c, h, i, d, e) {
                s.className += ' ' + y;
                h.start = 1 * new Date;
                h.end = i = function() {
                    s.className = s.className.replace(RegExp(' ?' + y), '')
                };
                (a[n] = a[n] || []).hide = h;
                setTimeout(function() {
                    i();
                    h.end = null
                }, c);
                h.timeout = c;
              })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
                  'GTM-PMBZ8H3': true
              });
            `,
          }} />
          <Script id="googletagmanager2" strategy="beforeInteractive" dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-5NW47TX');
            `,
          }} />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NW47TX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
