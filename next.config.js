/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google OAuth profile images
      'avatars.githubusercontent.com', // GitHub profile images (if you add GitHub auth later)
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
