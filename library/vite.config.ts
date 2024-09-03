import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { join, resolve } from "path";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, join("src", "components", "index.ts")),
        themes: resolve(__dirname, join("src", "themes", "index.ts"))
      }
    },
    rollupOptions: {
      external: Object.keys(peerDependencies)
    }
  },
  plugins: [dts()]
});
