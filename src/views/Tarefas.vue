<template>
  <div class="container">
    <div class="cabecalho">
      <div class="titulo">
        <v-icon>mdi-weather-sunny</v-icon>
        <span>Meu dia</span>
      </div>
      <div class="data">
        <span>{{formatarDataCabecalho}}</span>
      </div>
    </div>
    <div class="conteudo">
      <v-text-field
        density="comfortable"
        variant="solo"
        label="Adicionar uma tarefa"
        placeholder="Adicionar uma tarefa"
        prepend-inner-icon="mdi-checkbox-blank-circle-outline"
        single-line
        autofocus
        @click:append="console.log('teste')"
      >
        <template v-slot:append>
          <v-btn class="text-none btn-adicionar">
            Adicionar
          </v-btn>
        </template>

      </v-text-field>

      <div class="lista-tarefas">
        <span>Nenhuma tarefa</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import 'moment/locale/pt-br'

export default {
  data() {
    return {
    }
  },

  computed:{
    formatarDataCabecalho(){
      return moment(new Date).locale('pt-br').format('LLLL');
    }
  }
}
</script>

<style scoped>

.cabecalho .titulo{
  font-size: 1.4rem;
  margin-top: 1rem;
  display: flex;
  gap: 5px;
}

.cabecalho .data{
  margin-left: 5px;
  font-size: .8rem;
  color: rgba(0, 0, 0, 0.637);
}

.conteudo{
  margin-top: 35px;
}

.conteudo .lista-tarefas{
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteudo .btn-adicionar{
  font-size: .75rem;
  max-width: 90px;
  color: #fff;
  background-color: #084A89;
}

</style>