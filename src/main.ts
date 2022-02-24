import { createApp } from 'vue'
import App from './layout/App.vue'
import Router from './layout/Router'

const app = createApp(App)
app.use(Router)
app.mount('#app')
