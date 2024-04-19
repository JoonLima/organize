import http from "./api";

function obterTodos(){
  return new Promise((resolve, reject) => {
    return http
      .get("/tarefas")
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  });
}

function cadastrar(tarefa) {
  return new Promise((resolve, reject) => {
    return http
      .post("/tarefas", tarefa)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function atualizar(tarefa) {
  return new Promise((resolve, reject) => {
    return http
      .put(`/tarefas/${tarefa.id}`, tarefa)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function deletar(tarefa) {
  return new Promise((resolve, reject) => {
    return http
      .delete(`/tarefas/${tarefa.id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}


export default {
  obterTodos,
  cadastrar,
  atualizar,
  deletar
}