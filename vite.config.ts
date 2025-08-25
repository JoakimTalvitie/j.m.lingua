import path from "path";
import {defineConfig, loadEnv} from "vite";

export default defineConfig(({mode}) => {
  return {
    base: "/j.m.lingua/", // Set base path for GitHub Pages
    define: {},
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
