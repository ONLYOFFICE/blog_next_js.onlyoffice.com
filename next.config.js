/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000 , must-revalidate',
          }
        ],
      },
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Instead of this value:
            value: 'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
            // Cache-Control response header is `public, max-age=60` in production
            // and `public, max-age=0, must-revalidate` in development
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  i18n,
  basePath: '/blog',
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN_1, process.env.IMAGE_DOMAIN_2],
    formats: ['image/webp']
  },
  productionBrowserSourceMaps: true,
  staticPageGenerationTimeout: 1000,
  experimental: {
    largePageDataBytes: 128 * 1000000,
    workerThreads: false,
    cpus: 4,
    optimisticClientCache: false
  },
}

module.exports = nextConfig
