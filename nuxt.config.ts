// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    app: {
        head: {
            title: "Anson Ng",
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon-96x96.png",
                    sizes: "96x96",
                },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    css: ["~/assets/css/main.css"],
    modules: [
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxt/fonts",
        "@nuxtjs/i18n",
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
                weights: [400, 500, 600, 700],
            },
            {
                name: "Fraunces",
                provider: "google",
                weights: [400, 700],
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
    icon: {
        mode: "css",
        cssLayer: "base",
    },
    // enable preview causes parse error on Nuxt Studio
    // content: {
    //     preview: {
    //         api: 'https://api.nuxt.studio'
    //     }
    // }
});
