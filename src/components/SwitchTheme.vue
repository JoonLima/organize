<template>
  <v-switch
    v-model="tema"
    :onchange="alterarTema"
    false-icon="mdi-weather-sunny"
    true-icon="mdi-weather-night"
    hide-details
  ></v-switch>
    
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'SwitchTheme',
  data() {
    return {
      theme: useTheme(),
      tema: false,
    }
  },

  methods:{
    alterarTema(){
      this.theme.global.name = this.theme.global.current.dark ? 'light' : 'dark'
    } 
  },
 
}
</script>

<style scoped>


</style>