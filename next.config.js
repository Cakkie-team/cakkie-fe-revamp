/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=9, must-revalidate',
              }
            ],
          },
        ]
      },
}

module.exports = nextConfig
