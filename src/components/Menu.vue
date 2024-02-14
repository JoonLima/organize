<template>
  
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        color="primary"
        z-index="999"
      >
        <v-btn  
          size="55" 
          icon
          variant="text"
          @click.stop="rail = !rail" 
          height="50px"> 
          <v-icon size="27">mdi-menu</v-icon>  
        </v-btn>

        <v-list class="lista-menu" density="comfortable" nav>
          <v-list-item 
            to="/"
            @click.stop="rail = true" 
            prepend-icon="mdi-clipboard-check-multiple-outline" 
            value="tarefas"
            >
            <v-list-item-title>Tarefas</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/anotacoes"
            @click.stop="rail = true" 
            prepend-icon="mdi-clipboard-text-multiple-outline"  
            value="anotacoes">
            <v-list-item-title>Anotações</v-list-item-title>
          </v-list-item>
          <v-list-item 
            to="/financas"
            @click.stop="rail = true" 
            prepend-icon="mdi-cash-multiple"
            value="financas">
            <v-list-item-title>Finanças</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
    </v-layout>
  
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

.lista-menu{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

div[class="v-list-item-title"]{
  font-size: 15px;
}
  
</style>