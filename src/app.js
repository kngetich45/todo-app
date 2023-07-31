import { createApp } from 'vue'
import App from './App.vue'
import AppCard from './components/layout/AppCard.vue'

import './assets/main.css'

const app = createApp(App)

app.component('AppCard', AppCard)

app.mount('#app')
