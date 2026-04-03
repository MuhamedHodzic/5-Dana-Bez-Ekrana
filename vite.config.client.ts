import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/5-Dana-Bez-Ekrana/", // GitHub Pages user site - served from subdirectory
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