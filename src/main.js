import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './components/Provider.vue'
import router from './router'
import naive from "naive-ui"

import './assets/style/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
