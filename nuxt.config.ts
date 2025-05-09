// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    app: {
        head: {
            title: "Anson Ng",
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
    css: ["~/assets/css/main.css"],
    modules: [
        "@nuxt/icon",
        "@nuxtjs/i18n",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxt/fonts",
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    runtimeConfig: {
        public: {
            __APP_VERSION__: pkg.version,
        },
    },
    i18n: {
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "sv", name: "Swedish", file: "sv.json" },
        ],
    },
    fonts: {
        families: [
            {
                name: "DM Sans",
                provider: "google",
            },
            {
                name: "Fraunces",
                provider: "google",
            },
            {
                name: "Geist Mono",
                provider: "google",
            },
            {
                name: "Reenie Beanie",
                provider: "google",
            },
        ],
    },
});
