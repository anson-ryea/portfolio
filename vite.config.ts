import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevtools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevtools(), tailwindcss()],
});
