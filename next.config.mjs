/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile/1",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
