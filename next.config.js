/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w600_and_h900_bestv2/**',
      },
    ],
  },
};

module.exports = nextConfig;
