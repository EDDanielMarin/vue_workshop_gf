<template>
  <div id="app">

    <div class="p-col-12 p-md-12">
                        <div class="icon p-col-4 p-md-4"><i class="pi pi-reply" @click="undo"></i></div>
    
                     </div>
                     
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
  },
  methods:{
    undo() {
      if(this.$context.history.length) {
        this.$context.history.pop().undo();
      }
    }
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
