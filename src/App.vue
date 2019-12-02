<template>
  <div id="app">
    <searchBar></searchBar>
     <container></container>
    
  </div>
</template>

<script>
import searchBar from './components/search-bar'
import container from './components/container'

export default {
  name: 'app',
  components: {
    searchBar,container
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
