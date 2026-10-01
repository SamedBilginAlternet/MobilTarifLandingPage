import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is static, so the build emits plain files to out/ and the
  // container serves them with nginx (see Dockerfile).
  output: "export",
};

export default nextConfig;
