import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // GitHub Pages base path (served from gh-pages branch root)
  build: {
    outDir: "dist", // frontend ide direktno u dist
    sourcemap: true, // za debug
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});