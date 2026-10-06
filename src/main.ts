import './style.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import { languages, getInitialLocale } from './i18n'

const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'uz',
    messages: languages
})

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')

AOS.init({
    once: true,
    duration: 700,
    offset: 80,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
