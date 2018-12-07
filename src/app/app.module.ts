import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './vision.routing'
import { AppComponent } from './app.component';
import { ClasseService } from './services/classe.service'
import { LoginService } from './services/login.service'
import { ClienteService } from './services/cliente.service'
import { ProdutoService } from './services/produto.service'
import { TabelaService } from './services/tabela.service'
import { UsuarioService } from './services/usuario.service'
import { OrdemService } from './services/ordem.service'
import { OrdemprodutoService } from './services/ordemproduto.service'


import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
  ],
  providers: [ClasseService,LoginService,ClienteService,ProdutoService,TabelaService,UsuarioService,OrdemprodutoService,OrdemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
