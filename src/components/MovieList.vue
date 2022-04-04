<template>
<div class="wrapper">
  <div v-if="!isMovieSelected" class="products">

    <div class="product" v-for="movie in movies" :key="movie.number">
    <div v-on:click.capture="showMovieInfo(movie)" class="info">
      <!-- todo: make this a click -->
      <h1>{{movie.name}}</h1>
      <p>{{ movie.releaseDate }}</p>
    </div>
    <div class="image">
      <img :src="'/images/'+movie.image">
    </div>
    </div>
  </div>
  <span v-else>
      <SingleMovieView :movie="selectedMovie" />
      <div class="buttonHolder">
        <button @click="back()"> Back </button>
      </div>
      
    </span>
</div>
</template>

<script>
import SingleMovieView from './SingleMovieView.vue'

export default {
  name: 'MovieList',
  components: {
    SingleMovieView
  },
  props: {
    movies: Array
  },
  data() {
    return {
      isMovieSelected: false,
      selectedMovie: {}
    }
  },
  methods : {
    getImageUrl(movie){
        return '../assets/' + movie.image
    },
    showMovieInfo(movie){
      this.selectedMovie = movie;
      this.isMovieSelected = true;
    },
    back(){
      this.isMovieSelected = false;
      this.selectedMovie = {};
    }
  }
}
</script>

<style scoped>
.buttonHolder{
  margin-left: auto;
  text-align: right;
}
button {
  margin-top: 5px;
  width: 10%;
  border: none;
  height: 50px;
  background: #000;
  color: white;
}

button:hover {
  cursor: pointer;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #000000;
  color: rgb(255, 255, 255);
  padding: 10px 30px;
  height: 80px;
}

.info:hover {
  cursor: pointer;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}



.auto {
  margin-left: auto;
}
</style>