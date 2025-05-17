// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Iconos que usarás
import { faPhone, faMoon, faSun, faArrowRight, faBus } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Agregar iconos a la librería
library.add(faPhone, faMoon, faSun, faArrowRight, faWhatsapp, faBus)

// ✅ Primero crea la app
const app = createApp(App)

// ✅ Luego registra el componente global
app.component('font-awesome-icon', FontAwesomeIcon)

// ✅ Y después monta
app.use(createPinia())
app.use(router)
app.mount('#app')
