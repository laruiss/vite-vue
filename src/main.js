import 'virtual:windi.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import { FontAwesomeIcon } from './plugins/fontawesome'

import App from './App.vue'
import router from './router/index.js'

createApp(App)
  .use(router)
  .use(createPinia())
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
