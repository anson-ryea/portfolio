// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().override('nuxt/vue/rules', {
    rules: {
        'vue/html-indent': ['error', 2],
    },
})
