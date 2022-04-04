<template>
  <div class="about">
    
    <MovieList :movies="movies" />
  
    
  </div>
  
</template>

<script>
import  MovieList  from '../components/MovieList.vue'

export default {
  name: 'Movie-Comp',
  components: {
    MovieList,

  },
  
  computed: {
    movies() {
      return this.$root.$data.movies
    }
  },
  // methods: {
  //   select(country) {
  //     this.country = country;
  //   }
  // }
}
</script>

<style> 
  .about {
    background: rgb(255, 255, 255);
  }

</style>
