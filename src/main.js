import 'virtual:windi.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from './plugins/fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
