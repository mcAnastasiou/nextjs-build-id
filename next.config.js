/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  generateBuildId: async () => "unique-build-id3",
};

module.exports = nextConfig;
