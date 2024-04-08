<template>
  <div class="container">
    <div class="cabecalho">
      <div class="titulo-cabecalho">
        <div class="texto">
          <v-icon>mdi-weather-sunny</v-icon>
          <span>Minhas tarefas</span>
        </div>
        
        <div class="data">
          <span>{{formatarDataCabecalho}}</span>
        </div>
      </div>

      <switch-theme />

        <div class="filtro">
          <div class="titulo-filtro">
            <span>Filtro para exibição</span>
          </div>
          <div class="botoes">
            <v-btn @click="obterTodos" :class="{'selecionado' : exibirTodos}" size="small" variant="tonal"> 
              <span>Todos</span>
            </v-btn>
            <v-btn @click="obterFavoritos" :class="{'selecionado' : !exibirTodos}" size="small" variant="tonal"> 
              <span>Favoritos</span>
            </v-btn>

          </div>
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
          <v-btn @click="adicionarTarefa" class="text-none btn-adicionar" color="primary">
            <v-icon>mdi-plus</v-icon>
            Adicionar
          </v-btn>
        </template>
      </v-text-field>

      <div class="lista-tarefas">
        <span v-if="tarefas.length <= 0">Nenhuma tarefa</span>
        <card-padrao v-else  v-for="tarefa in tarefas" :key="tarefa" :tarefa="tarefa" @tarefaDeletada="obterTodos"/>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import 'moment/locale/pt-br'
import CardPadrao from '@/components/CardPadrao.vue';
import SwitchTheme from '@/components/SwitchTheme.vue'
import tarefaService from '@/service/tarefa-service';
import Tarefa from '@/models/tarefa-model';

export default {
  components:{CardPadrao, SwitchTheme},
  data() {
    return {
      tarefas: [],
      tarefa: new Tarefa(),
      exibirTodos: true
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
          this.exibirTodos = true;
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

    obterFavoritos(){
      this.exibirTodos = false
      let somenteFavoritos = this.tarefas.filter(t => t.favorito == true)
      this.tarefas = somenteFavoritos
    }
  },

  

  // mounted(){
  //   this.obterTodos();
  // }
}
</script>

<style scoped>

.cabecalho{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cabecalho .titulo-cabecalho{
  font-size: 1.4rem;
  margin-top: 1rem;
  display: flex;
  gap: 5px;
  flex-direction: column;
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

.selecionado{
  background-color: #084A89;
  color: #ffff;
}

.cabecalho .filtro{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.cabecalho .filtro .botoes{
  display: flex;
  gap: 10px;
}

.filtro .titulo-filtro{
  font-size: .8rem;
}

</style>