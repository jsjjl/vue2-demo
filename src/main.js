import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
