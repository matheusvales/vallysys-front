import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';
import {Categoria} from "../categoria/categoria.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: String): Observable<Produto[]>  {
    const url = `${this.baseUrl}/produto?categoria=${id_cat}`
    return this.http.get<Produto[]>(url)
  }
  findAll():Observable<Produto[]> {
    const url = `${this.baseUrl}/produto`
    return this.http.get<Produto[]>(url)
  }
  findAll2():Observable<Produto[]> {
    const url = `${this.baseUrl}/produto/get`
    return this.http.get<Produto[]>(url)
  }

  findById(id: String):Observable<Produto>{
    const url = `${this.baseUrl}/produto/${id}`
    return this.http.get<Produto>(url)
  }

  update(produto: Produto):Observable<void> {
    const url = `${this.baseUrl}/produto/${produto.id}`
    return this.http.put<void>(url, produto)
  }

  create(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produto`
    return this.http.post<Produto>(url, produto)
  }

  delete(produto: Produto):Observable<void> {
    const url = `${this.baseUrl}/produto/${produto.id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
