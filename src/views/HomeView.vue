<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/main_logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home img{
  padding-top: 100px;
  width:200px;
  height: auto;
}
</style>
