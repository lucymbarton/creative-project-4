import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StarRating from 'vue-star-rating'

Vue.config.productionTip = false

Vue.component('star-rating', StarRating.default);

import movieData from './movieData.js'

let data = {
  movies: movieData
}

new Vue({
  router,
  data,
  components: {
    StarRating
  },
  render: h => h(App)
}).$mount('#app')
