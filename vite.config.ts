import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevtools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [vue(), vueDevtools(), tailwindcss()],
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "/src/assets"),
      "@Components": path.resolve(__dirname, "/src/components"),
      "@Layouts": path.resolve(__dirname, "/src/layouts"),
      "@Locales": path.resolve(__dirname, "/src/locales"),
      "@Stores": path.resolve(__dirname, "/src/stores"),
      "@Views": path.resolve(__dirname, "/src/views"),
      "@": path.resolve(__dirname, "/src"),
    }
  }
});
