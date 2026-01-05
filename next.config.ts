// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // importante em export estático
  trailingSlash: true, // ajuda com rotas em hospedagem estática
};

export default nextConfig;
