import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Use an Immediately Invoked Function Expression (IIFE) to handle the async import
export default defineConfig(async () => {
  const cartographer =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer(),
        )
      : [];

  return {
    plugins: [react(), runtimeErrorOverlay(), cartographer].flat(),
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});