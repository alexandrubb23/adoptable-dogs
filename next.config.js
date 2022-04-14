/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  webpack: config => {
    if (!config.experiments) {
      config.experiments = {};
    }

    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
