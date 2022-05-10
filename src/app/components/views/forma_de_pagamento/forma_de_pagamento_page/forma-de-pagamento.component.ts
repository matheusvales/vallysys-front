import {Component, OnInit, ViewChild} from "@angular/core";
import { FormaDePagamento} from "../forma-de-pagamento.model";
import { FormaDePagamentoService } from "../forma-de-pagamento.service";
import DataGrid from "devextreme/ui/data_grid";
import {DxDataGridComponent} from "devextreme-angular";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./forma-de-pagamento.component.html",
  styleUrls: ["./forma-de-pagamento.component.css"],
})
export class FormaDePagamentoComponent implements OnInit {

  formas_pagamento:Array<any>=[]
  forma_pagamento={}as FormaDePagamento

  @ViewChild(DxDataGridComponent, { static: false }) dataGridInstance: any;

  ativa:Array<string>=[
    "Sim",
    "Não"
  ];

  constructor(private formaPagamentoService: FormaDePagamentoService) {
  }
  //


  ngOnInit(): void {
    this.listar();

  }

  listar() {
    this.formaPagamentoService.findAll().subscribe(dados => this.formas_pagamento = dados);
  }

  editar(forma_pagamento: FormaDePagamento) {
    this.formaPagamentoService.update(this.forma_pagamento).subscribe();
  }


  deletar(forma_pagamento:FormaDePagamento) {
    this.formaPagamentoService.delete(forma_pagamento).subscribe()

  }

  onProdutoRowRemoved(event: any) {
    this.forma_pagamento = event.data;
    this.deletar(this.forma_pagamento);
  }

  onProdutoRowEditing(event: any) {
    this.forma_pagamento = event.data;
    this.editar(this.forma_pagamento)
  }

  insertRow(e: { cancel: Promise<void>; data: FormaDePagamento; }) {
    e.cancel = this.formaPagamentoService.create(e.data)
        .toPromise()
        .then(p => { // Success
              e.data = p;
            }
        );
  }
  //

  onProdutoRowInserted(event: any) {
    this.formaPagamentoService.create(event.data).subscribe( p => {
      event.data = p;
    });

  }
  //

  onRowInserted(event: any) {
    debugger;
  }




}






