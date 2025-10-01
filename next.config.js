/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = nextConfig

// Setup Cloudflare Workers development platform
if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev()
  })
}
