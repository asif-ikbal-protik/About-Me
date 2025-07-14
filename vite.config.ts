import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",
  base: "/About-Me/",
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
});