import { defineConfig } from "vite";
import { join, resolve } from "path";
import { peerDependencies } from "./package.json";

export default defineConfig({
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
