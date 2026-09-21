import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "./",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("."),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      hmr: process.env.DISABLE_HMR !== "true",
      watch: process.env.DISABLE_HMR === "true" ? null : {},
    },
    build: {
      chunkSizeWarningLimit: 13000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/react-router/")
            ) {
              return "vendor";
            }
            if (
              id.includes("node_modules/lucide-react/") ||
              id.includes("node_modules/react-markdown/")
            ) {
              return "ui";
            }
          },
        },
      },
    },
  };
});
