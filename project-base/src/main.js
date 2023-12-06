import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store';

const app = createApp(App)
const store = setupStore(app)

app.use(router)
app.use(store);

app.mount('#app')
