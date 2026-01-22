import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Nhập router vừa tạo
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router) // Kích hoạt router [cite: 6, 47]
app.mount('#app')