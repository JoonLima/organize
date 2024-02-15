<template>
  <div class="container">
    <div class="cabecalho">
      <div class="titulo">
        <v-icon>mdi-weather-sunny</v-icon>
        <span>Minhas tarefas</span>
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
        v-model="tarefa.titulo"
      >
        <template v-slot:append-inner>
          <v-btn @click="adicionarTarefa" class="text-none btn-adicionar">
            <v-icon>mdi-plus</v-icon>
            Adicionar
          </v-btn>
        </template>
      </v-text-field>

      <div class="lista-tarefas">
        <span v-if="tarefas.length <= 0">Nenhuma tarefa</span>
        <card-padrao v-else  v-for="tarefa in tarefas" :tarefa="tarefa" @tarefaDeletada="obterTodos"/>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import 'moment/locale/pt-br'
import CardPadrao from '@/components/CardPadrao.vue';
import tarefaService from '@/service/tarefa-service';
import Tarefa from '@/models/tarefa-model';

export default {
  components:{CardPadrao},
  data() {
    return {
      tarefas: [],
      tarefa: new Tarefa(),
    }
  },

  computed:{
    formatarDataCabecalho(){
      let dataAtual = new Date()
      return `${moment(dataAtual).format('dddd')}, ${moment(dataAtual).format('LL')}`
    }
  },

  methods:{
    obterTodos(){
      tarefaService.obterTodos()
        .then((response) => {
          this.tarefas = response.data.map((t) => new Tarefa(t))
          this.tarefas.reverse();
        })
        .catch((error) => console.log(error))
    },

    adicionarTarefa(){
      tarefaService.cadastrar(this.tarefa)
        .then(() => {
          this.tarefa = new Tarefa();
          this.obterTodos();
        })
        .catch((error) => console.log(error));
    },
  },

  

  mounted(){
    this.obterTodos();
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
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.conteudo .btn-adicionar{
  font-size: .75rem;
  max-width: 95px;
  color: #fff;
  background-color: #084A89;
}

.todos{
  background-color: red;
}

.favoritos{
  background-color: red;
}

</style>