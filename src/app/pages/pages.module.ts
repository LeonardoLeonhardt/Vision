import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './pages.routing';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component'

import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component';
import { ClasseComponent } from './classe/classe.component';
import { ClasselistComponent } from './classelist/classelist.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutolistComponent } from './produtolist/produtolist.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelalistComponent } from './tabelalist/tabelalist.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientelistComponent } from './clientelist/clientelist.component';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { OrdemlistComponent } from './ordemlist/ordemlist.component';
import { OrdemComponent } from './ordem/ordem.component'
@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        //componentes
        PagesComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ClasseComponent,
        ClasselistComponent,
        ProdutoComponent,
        ProdutolistComponent,
        TabelaComponent,
        TabelalistComponent,
        ClienteComponent,
        ClientelistComponent,
        UsuariolistComponent,
        UsuarioComponent,
        OrdemlistComponent,
        OrdemComponent
        ]
})

export class PagesModule { }
