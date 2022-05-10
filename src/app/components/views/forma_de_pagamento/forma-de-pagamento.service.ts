import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {FormaDePagamento} from "./forma-de-pagamento.model";


@Injectable({
  providedIn: 'root'
})
export class FormaDePagamentoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<FormaDePagamento[]> {
    const url = `${this.baseUrl}/forma-de-pagamento`
    return this.http.get<FormaDePagamento[]>(url)
  }

  findById(id: String): Observable<FormaDePagamento> {
    const url = `${this.baseUrl}/forma-de-pagamento/${id}`
    return this.http.get<FormaDePagamento>(url)
  }

  create(formaDePagamento: FormaDePagamento): Observable<FormaDePagamento>{
    const url = `${this.baseUrl}/forma-de-pagamento`
    return this.http.post<FormaDePagamento>(url, formaDePagamento);
  }

  delete(formaDePagamento: FormaDePagamento):Observable<void> {
    const url = `${this.baseUrl}/forma-de-pagamento/${formaDePagamento.id}`
    return this.http.delete<void>(url)
  }

  update(formaDePagamento: FormaDePagamento):Observable<void> {
    const url = `${this.baseUrl}/forma-de-pagamento/${formaDePagamento.id}`
    return this.http.put<void>(url, formaDePagamento)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
