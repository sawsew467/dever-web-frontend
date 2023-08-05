/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@svg'] = path.join(__dirname, 'assets/header');
    config.resolve.alias['@blogs'] = path.join(__dirname,'assets/images/pages/blogs')
    return config;
  },
};

module.exports = nextConfig;
