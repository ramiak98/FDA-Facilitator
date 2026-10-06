import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photography is served from Unsplash (see src/lib/images.ts).
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
