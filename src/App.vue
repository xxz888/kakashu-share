<template>
  <div id="app" v-cloak>
    <loading v-show="requestLoading"></loading>
    <router-view/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import loading from '@/components/loading.vue'
export default {
  computed:{
    ...mapState({
      requestLoading:state => state.user.requestLoading
    }),
  },
  components: {
    loading,
  },
  mounted(){
    
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

[v-cloak]{
  display: none;
}
</style>
