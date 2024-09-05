import { defineConfig } from "vite";
import { join, resolve } from "path";
import { peerDependencies } from "./package.json";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, join("src", "components", "index.js")),
        themes: resolve(__dirname, join("src", "themes", "index.js"))
      }
    },
    rollupOptions: {
      external: Object.keys(peerDependencies)
    }
  }
});
