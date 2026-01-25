// Plugins
import { registerPlugins } from '@/plugins'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/global.css';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import "/node_modules/flag-icons/css/flag-icons.min.css";

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
