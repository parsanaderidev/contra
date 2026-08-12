import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next's dev overlay injects a <script> into <body> before hydration,
  // which breaks React hydration for the SSR'd Framer #main tree. Disable
  // the on-screen dev indicator so dev SSR == client in dev mode too.
  devIndicators: false,
  // Images are referenced via absolute URLs (framerusercontent) and inlined
  // markup, so disable the Next optimizer to keep the reference bytes intact.
  images: {
    unoptimized: true,
  },
  // Media files are streamed/inlined by the Framer runtime, nothing to transpile.
};

export default nextConfig;