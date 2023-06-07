/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@svg'] = path.join(__dirname, 'asses/svg');
    return config;
  },
};

module.exports = nextConfig;
