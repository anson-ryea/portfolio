import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import { createI18n } from 'vue-i18n'
import messages from '@Locales/messages'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages
})


const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
