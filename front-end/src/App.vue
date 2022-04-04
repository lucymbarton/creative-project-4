<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/movies">Movies</router-link>
    </nav>
    <router-view/>
    <div class="git">
    <footer style="width: 100%; height: auto; text-align: center; padding-top:100px;">
      <a href="https://github.com/lucymbarton/creative3"><img :src="'/images/github-logo.png'"></a>
      <p style="font-size:12px;"> Alec Burnett & Lucy Barton </p>
    </footer>
    </div>
  </div>
</template>

<style>
template {
  background: rgb(255, 255, 255);
}
*{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
}
.git {
  width: 100%;
}
.git img {
  width: 50px;
  height: auto;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #8a8a8a;
}
</style>
