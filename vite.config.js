import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  cacheDir: "node_modules/.vite-love",
  server: {
    fs: {
      strict: true,
      allow: [root],
    },
  },
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
});
