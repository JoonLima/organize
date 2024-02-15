export default class Tarefa{
  constructor(obj){
    obj = obj || {};

    this.id = obj.id;
    this.titulo = obj.titulo;
    this.data = obj.data;
    this.favorito = !!(obj.favorito);
    this.concluido = !!(obj.concluido);
  }
}