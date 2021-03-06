import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "./components/template/header/header.component";

import {MatToolbarModule} from "@angular/material/toolbar";
import {FooterComponent} from "./components/template/footer/footer.component";
import {NavComponent} from "./components/template/nav/nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from "./components/views/home/home.component";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CategoriaReadComponent} from "./components/views/categoria/categoria-read/categoria-read.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";


import {ProdutoReadComponent} from './components/views/produto/produto-read/produto-read.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    DxSwitchModule,
    DxTreeViewModule
} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,



    ProdutoReadComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatExpansionModule,
        DxDataGridModule,
        DxSwitchModule,
        DxSelectBoxModule,
        DxFormModule,
        DxTreeViewModule,
        DxButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
