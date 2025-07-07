import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" && process.env.BUILD_TARGET === "gh-pages" ? "/Portofolio-Wahyu/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: /\.(pdf)$/i,
}));
