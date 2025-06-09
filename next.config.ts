import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: '/', destination: '/dashboard', permanent: true }];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // 옵션에 따라 title, props 등 설정 가능
            prettier: true,
            svgo: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
