<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        color="secondary"
      >
        <v-btn  
          size="55" 
          icon
          variant="text"
          @click.stop="rail = !rail" 
          height="50px"> 
          <v-icon color="black" size="27">mdi-menu</v-icon>  
        </v-btn>

        <v-list density="comfortable" nav>
          <v-list-item 
            class="item-menu"
            @click.stop="rail = true" 
            prepend-icon="mdi-clipboard-check-multiple-outline" 
            value="tarefas"
            >
            <v-list-item-title>Tarefas</v-list-item-title>
          </v-list-item>
          <v-list-item 
            class="item-menu"
            @click.stop="rail = true" 
            prepend-icon="mdi-clipboard-text-multiple-outline"  
            value="textos">
            <v-list-item-title>Textos</v-list-item-title>
          </v-list-item>
          <v-list-item 
            class="item-menu"
            @click.stop="rail = true" 
            prepend-icon="mdi-cash-multiple"
            value="financas">
            <v-list-item-title>Finanças</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
    </v-layout>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>
<style scoped>

.item-menu{
  
  display: flex;
  align-items: center;
}
  
</style>