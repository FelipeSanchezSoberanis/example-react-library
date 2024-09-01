import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { join, resolve } from "path";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        components: resolve(__dirname, join("src", "components", "index.ts")),
        styles: resolve(__dirname, join("src", "styles", "index.ts"))
      }
    },
    rollupOptions: {
      external: Object.keys(peerDependencies)
    }
  },
  plugins: [react(), dts()]
});
