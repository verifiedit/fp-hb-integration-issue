import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import fpjsPlugin from '@fingerprintjs/fingerprintjs-pro-vue-v3'
import HoneybadgerVue from '@honeybadger-io/vue'

const enableHoneybadger = import.meta.env.VITE_ENABLE_HONEYBADGER === 'true' || false
const app = createApp(App)
app.use(fpjsPlugin, {
  loadOptions: {
    apiKey: import.meta.env.VITE_FINGERPRINT_TOKEN,
    endpoint: import.meta.env.VITE_FINGERPRINT_ENDPOINT,
    scriptUrlPattern: import.meta.env.VITE_FINGERPRINT_SCRIPT_URL_PATTERN
  }
})
console.log('Honeybadger enabled:', enableHoneybadger)
if (enableHoneybadger) {
  app.use(HoneybadgerVue, {
    apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
    environment: 'development',
    reportData: true,
    revision: 'test'
  })
}
app.mount('#app')
