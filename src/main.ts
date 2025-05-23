import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import nl from './locale/nl.json'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const i18n = createI18n({
  locale: 'nl',
  messages: {
    en,
    nl
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
