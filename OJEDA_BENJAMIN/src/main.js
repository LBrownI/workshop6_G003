import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UserProfile from './components/UserProfile.vue'

const app = createApp(App)

app.component('UserP', UserProfile)

app.mount('#app')