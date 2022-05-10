import {Component, OnInit, ViewChild} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "../produto.model";
import { ProdutoService } from "../produto.service";
import {Categoria} from "../../categoria/categoria.model";
import {CategoriaService} from "../../categoria/categoria.service";
import {DxDataGridComponent} from "devextreme-angular";

  @Component({
    selector: 'app-livro-read',
    templateUrl: './produto-read.component.html',
    styleUrls: ['./produto-read.component.css']
  })
  export class ProdutoReadComponent implements OnInit {

    concorrente={} as String;
    situacao={} as String;
    categoria={} as Categoria;

    produto ={} as Produto;

     @ViewChild(DxDataGridComponent, { static: false }) dataGridInstance: any;


     concorrentes:Array<string>=[
       "Sim",
       "Não"
   ];
   situacoes:Array<string>=[
       "Ativo",
       "Não ativo"
   ];
    categorias: Array<any>=[];
    produtos: Array<any> =[];

    constructor(private produtosService: ProdutoService,
                private categoriaService: CategoriaService,
               ) {
    }

    events: Array<string> = [];


    ngOnInit(): void {
      this.listar();

    }

    listar() {
      this.produtosService.findAll2().subscribe(dados => this.produtos = dados);
      this.categoriaService.findAll().subscribe(dados =>this.categorias = dados);

    }

    editar(produto: Produto) {

      this.produtosService.update(this.produto).subscribe();
    }


    deletar(produto:Produto) {
      this.produtosService.delete(produto).subscribe()

    }


    onProdutoRowRemoved(event: any) {
      this.produto = event.data;
      this.deletar(this.produto);
    }

    onProdutoRowEditing(event: any) {
       this.produto = event.data;
      this.editar(this.produto)
    }

    insertRow(e: { cancel: Promise<void>; data: Produto; }) {
      e.cancel = this.produtosService.create(e.data)
          .toPromise()
          .then(p => { // Success
                e.data = p;
              }
          );
    }

    onProdutoRowInserted(event: any) {
      this.produtosService.create(event.data).subscribe( p => {
        event.data = p;
      });

    }
    setConcorente(event:string){
      this.concorrente= event;

    }
    onRowInserted(event: any) {
      debugger;
    }
      refresh() {
          this.dataGridInstance.instance.clearFilter();
      }

  }
