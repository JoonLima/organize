<template>
  <menu-sistema />
  <router-view />
</template>


<script>
import Menu from './components/Menu.vue';

export default {
  data() {
    return {
      
    }
  },

  components:{
    'menu-sistema' :Menu
  }
}


</script>

<style>
.container{
  margin-left: 80px;
  margin-right: 15px;
}


</style>