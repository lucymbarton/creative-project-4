<template>
  <div class="about">
    <h1 style="font-size:50px;">{{movie.name}}</h1>
    <div style="display: flex;">

        <img :src="'images/'+movie.image">

        <div style="width: 50%; padding: 3%;"> 
        <p> Release Date: {{ movie.releaseDate }} </p>
        <p> Opening Gross: ${{ movie.openingGross }} </p>
        <p> Lifetime Gross: ${{movie.lifetimeGross}} </p>
        <StarRating @rating-selected ="setRating"></StarRating>
      </div>
    </div>
    
    

    
    


  </div>
  
  
</template>
  <script src="https://unpkg.com/vue-star-rating/dist/VueStarRating.umd.min.js"></script>
<style scoped>
*{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.about img{
  padding-left: 30px;
  padding-top:45px;
    width:30%;
    height: auto;
}
p {
  font-size: 30px;
  padding-top:30px;
  padding-bottom:30px;
}
</style>
<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'Single-Movie-Comp',
  props: {
      movie: Object
  },
  components: {
    StarRating
  },

  
  // data() {
  //   return {
  //     country: '',
  //   }
  // },
  computed: {
    movies() {
      return this.$root.$data.movies
    }, 
    
  },
  methods: {
    setRating(rating){
        //todo: call backend to add rating to this specific movie object
    }
  }
}
</script>