<template>
  <navbar />
  <router-view/>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  components:{navbar}
}
</script>

<style>
body{
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}


</style>
