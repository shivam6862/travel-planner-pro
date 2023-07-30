/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1i21eq0w7p1n3.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.guruwalk.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
