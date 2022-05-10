import {Categoria} from "../categoria/categoria.model";

export interface Produto {
    id?: String,
    nome: String,
    codigo_interno: String,
    concorrente: String,
    situacao:String,
    categoria:Categoria,
}