<template>
<div class="wrapper">
  <div v-if="!isMovieSelected" class="products">

    <div class="product" v-for="movie in movies" :key="movie.number" style="padding-right: 100px;">
    <div v-on:click.capture="showMovieInfo(movie)" class="info">
      <!-- todo: make this a click -->
      <h1>{{movie.name}}</h1>
      <p>{{ movie.releaseDate }}</p>
    </div>
    <div class="image">
      <img :src="'images/'+movie.image">
    </div>

    <div style="width: 50%;">
      <StarRating :key="key" style="width: 50%" :rating="getRating(movie.movie)" :read-only="true"></StarRating>
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
import StarRating from 'vue-star-rating'
import axios from 'axios';

export default {
  name: 'MovieList',
  components: {
    SingleMovieView,
    StarRating
  },
  props: {
    movies: Array
  },
  created() {
    this.getRatings()
  },
  data() {
    return {
      isMovieSelected: false,
      selectedMovie: {},
      items: {},
      errors: [],
      ratingsMap: new Map(),
      key: 0
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
      this.getRatings();
      this.isMovieSelected = false;
      this.selectedMovie = {};
    },
    async getRatings(){
      try {
        let response = await axios.get("/api/ratings/");
        this.items = response.data;
      } catch (error) {
        console.log(error)
        this.errors.push(error)
      }
    
      let movie1Ratings = []
      let movie2Ratings = []
      let movie3Ratings = []
      let movie4Ratings = []
      let movie5Ratings = []
      let movie6Ratings = []
      let movie7Ratings = []
      let movie8Ratings = []

      for(let item of this.items){
          if(item.title){
            console.log(item)
             switch (item.title) {
               case 1:
                 movie1Ratings.push(item.rating)
                 continue
                case 2:
                  movie2Ratings.push(item.rating)
                  continue
                case 3:
                  movie3Ratings.push(item.rating)
                  continue
                case 4:
                  movie4Ratings.push(item.rating)
                  continue
                case 5:
                  movie5Ratings.push(item.rating)
                  continue
                case 6:
                  movie6Ratings.push(item.rating)
                  continue
                case 7:
                  movie7Ratings.push(item.rating)
                  continue
                case 8:
                  movie8Ratings.push(item.rating)
                  continue
                default:
                  this.errors.push('error')
             }
          }
      }

      let allMovies = [movie1Ratings, movie2Ratings, movie3Ratings, movie4Ratings, movie5Ratings, movie6Ratings, movie7Ratings, movie8Ratings]

      for(let i = 0; i < allMovies.length; i++){
        if(allMovies[i].length === 0){
          this.ratingsMap.set(i+1, 0)
        } else {
          let sum = 0
          for(let rating of allMovies[i]){
            sum += rating
          }
          let average = Math.round(sum / allMovies[i].length)
          this.ratingsMap.set(i+1, average)
        }
      }
      this.key++
      
    },
    getRating(movieNumber){
      console.log(this.ratingsMap.get(movieNumber))
      return this.ratingsMap.get(movieNumber)
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