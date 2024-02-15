import moment from "moment"
import { newGuid } from '@/utils/guid'

export default class Tarefa{
  constructor(obj){
    obj = obj || {};

    this.id = obj.id || newGuid();
    this.titulo = obj.titulo;
    this.data = obj.data || moment().format('DD/MM/YYYY');
    this.favorito = !!(obj.favorito) || false;
    this.concluido = !!(obj.concluido) || false;
  }
}