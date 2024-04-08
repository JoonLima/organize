<template>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
    
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'SwitchTheme',
  data() {
    return {
      theme: useTheme()
    }
  },

  methods:{
    toggleTheme(){
      this.theme.global.name = this.theme.global.current.dark ? 'light' : 'dark'
    } 
  }

 
}
</script>

<style scoped>


</style>