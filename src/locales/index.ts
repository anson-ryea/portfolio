import { createI18n } from "vue-i18n";
import en from '@Locales/en/en'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
    }
})

export default i18n