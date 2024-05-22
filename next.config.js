/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@svg"] = path.join(__dirname, "assets/header");
    config.resolve.alias["@blogs"] = path.join(
      __dirname,
      "assets/images/pages/blogs"
    );
    return config;
  },
  images: {
    domains: ["res.cloudinary.com", "aiartshop.com", "th.bing.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
