// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

export default defineNuxtConfig({
    modules: [
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxt/eslint',
        '@nuxtjs/seo',
        '@nuxt/content',
        '@nuxtjs/i18n',
        'motion-v/nuxt',
        '@pinia/nuxt',
    ],
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Anson Ng',
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon-96x96.png',
                    sizes: '96x96',
                },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'shortcut icon', href: '/favicon.ico' },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['~/assets/css/main.css'],
    site: {
        url: 'https://www.an5on.com',
        name: 'Anson Ng',
    },
    runtimeConfig: {
        public: {
            __APP_VERSION__: pkg.version,
        },
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    vite: {
        plugins: [tailwindcss()],
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
            },
        },
    },
    fonts: {
        families: [
            {
                name: 'DM Sans',
                provider: 'local',
            },
            {
                name: 'Fraunces',
                provider: 'local',
            },
            {
                name: 'Geist Mono',
                provider: 'local',
            },
            {
                name: 'Reenie Beanie',
                provider: 'local',
            },
            {
                name: 'Array',
                provider: 'local',
            },
        ],
    },
    i18n: {
        defaultLocale: 'en',
        locales: [
            { code: 'en', name: 'english', file: 'en.json' },
            { code: 'sv', name: 'svenska', file: 'sv.json' },
        ],
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
    icon: {
        mode: 'css',
        cssLayer: 'base',
    },
})
