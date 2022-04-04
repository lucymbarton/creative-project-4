import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import movieData from './movieData.js'

let data = {
  movies: movieData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
