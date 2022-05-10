import {Component, OnInit, ViewChild} from "@angular/core";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";
import DataGrid from "devextreme/ui/data_grid";
import {DxDataGridComponent} from "devextreme-angular";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {
  categoria = {} as Categoria;

  categorias: Array<any> =[];

  @ViewChild(DxDataGridComponent, { static: false }) dataGridInstance: any;

  constructor(private categoriasService: CategoriaService) {
  }
  //
  events: Array<string> = [];

  ngOnInit(): void {
    this.listar();

  }

  listar() {
    this.categoriasService.findAll().subscribe(dados => this.categorias = dados);
  }

  editar(categoria: Categoria) {
    this.categoriasService.update(this.categoria).subscribe();
  }


  deletar(categoria:Categoria) {
    this.categoriasService.delete(categoria).subscribe()

  }

  onProdutoRowRemoved(event: any) {
    this.categoria = event.data;
    this.deletar(this.categoria);
  }

  onProdutoRowEditing(event: any) {
    this.categoria = event.data;
    this.editar(this.categoria)
  }

  insertRow(e: { cancel: Promise<void>; data: Categoria; }) {
    e.cancel = this.categoriasService.create(e.data)
        .toPromise()
        .then(p => { // Success
              e.data = p;
            }
        );
  }
  //

  onProdutoRowInserted(event: any) {
    this.categoriasService.create(event.data).subscribe( p => {
      event.data = p;
    });

  }
  //

  onRowInserted(event: any) {
    debugger;
  }




}






