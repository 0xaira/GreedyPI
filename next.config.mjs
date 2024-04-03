/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  }
}

export default nextConfig
