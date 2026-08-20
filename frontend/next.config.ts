import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: emits a plain HTML/CSS/JS site into `out/`, which can be
  // uploaded to any static host (Hostinger shared hosting, etc.).
  output: "export",
  images: {
    // No Next.js image optimizer on a static host.
    unoptimized: true,
  },
  // Emit /about/index.html rather than /about.html so Apache/LiteSpeed serves
  // clean URLs without rewrite rules.
  trailingSlash: true,
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
