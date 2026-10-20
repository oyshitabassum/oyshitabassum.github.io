import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  // a stray lockfile in the parent folder otherwise makes Turbopack guess the wrong root
  turbopack: { root: __dirname },
};

export default nextConfig;
