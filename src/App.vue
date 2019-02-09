<template>
  <v-app dark>
    <Navbar/>
    <DisplaySearch />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import DisplaySearch from './components/DisplaySearch.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    DisplaySearch
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 64px;
  text-align: center;
  color: white;
  min-height: 100vh;
}

</style>
