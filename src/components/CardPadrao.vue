<template>
  <v-card
    width="100%"
  >
  <template v-slot:title>
    <span :class="{'textoRiscado' : tarefa.concluido}">{{tarefa.titulo}}</span>
  </template>
  <template v-slot:subtitle>
    <span :class="{'textoRiscado' : tarefa.concluido}">criado em: {{tarefa.data}}</span>
  </template>
  <template v-slot:prepend>
    <v-icon :class="{'iconeInativo' : tarefa.concluido}" @click="concluirTarefa">{{ tarefa.concluido ? 'mdi-check-circle-outline' : 'mdi-circle-outline'}}</v-icon>
  </template>
  <template v-slot:append>
    <v-icon :class="{'iconeInativo' : tarefa.concluido}" class="pr-4" @click="alterarFavorito">{{tarefa.favorito ? 'mdi-star' : 'mdi-star-outline'}}</v-icon> 
    <v-icon :class="{'iconeInativo' : tarefa.concluido}" @click="deletarTarefa">mdi-delete</v-icon>
  </template>
  </v-card>
</template>

<script>
import Tarefa from '@/models/tarefa-model';
import tarefaService from '@/service/tarefa-service'

export default {
  props:{
    tarefa: { type: Object, default: { } },
    favorito: { type: Boolean, default: false },
    tarefaConcluida: { type: Boolean, default: false }
  },

  data() {
    return {

    }
  },

  methods: {
    alterarFavorito(){
      this.tarefa.favorito = !this.tarefa.favorito

      tarefaService.atualizar(this.tarefa)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error));
    },

    deletarTarefa(){
      tarefaService.deletar(this.tarefa)
        .then((response) => {
          this.$emit('tarefaDeletada')
        })
        .catch((error) => console.log(error));
    },

    concluirTarefa(){
      this.tarefa.concluido = !this.tarefa.concluido

      tarefaService.atualizar(this.tarefa)
        .then(() => {})
        .catch((error) => console.log(error));
    }
  }
}
</script>

<style scoped>

.textoRiscado{
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.459);
}

.iconeInativo{
  color: rgba(0, 0, 0, 0.459);
}

.acoes-card{
  display: flex;
}

</style>