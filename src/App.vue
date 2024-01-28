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
  margin-left: 70px;
}


</style>