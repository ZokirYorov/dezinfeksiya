import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { languages } from "./i18n";
import { defaultLocale} from "./i18n";
import { createI18n, useI18n} from "vue-i18n"

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
})

const app = createApp(App, {
})

app.use(router)
app.use(ElementPlus)
router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
});
app.use(i18n)

app.use(AOS.init())
app.mount('#app')
