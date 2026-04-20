import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/whyscaleworks",
        destination: "/#why",
        permanent: false,
      },
      {
        source: "/products",
        destination: "/#products",
        permanent: false,
      },
      {
        source: "/solutions",
        destination: "/#solutions",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
