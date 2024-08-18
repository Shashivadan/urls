/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**",
        port: ""
      },
      {
        protocol: "https",
        hostname: ""

      }
    ]
  }
};

export default nextConfig;
