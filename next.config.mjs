/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile/12",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
