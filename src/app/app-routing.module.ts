import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';

import { HomeComponent } from './components/views/home/home.component';

import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutoReadComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
