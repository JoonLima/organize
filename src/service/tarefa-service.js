import http from "./api";

function obterTodos(){
  return new Promise((resolve, reject) => {
    return http
      .get("/tarefas")
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  });
};

function cadastrar(tarefa) {
  return new Promise((resolve, reject) => {
    return http
      .post("/tarefas", tarefa)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}


export default {
  obterTodos,
  cadastrar
}