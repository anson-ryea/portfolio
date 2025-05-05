import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import i18n from '@Locales/index'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
