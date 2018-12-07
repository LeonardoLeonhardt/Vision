import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent} from './home/home.component'
import {ClasseComponent} from './classe/classe.component'
import {ClasselistComponent} from './classelist/classelist.component'
import {ProdutoComponent} from './produto/produto.component'
import {ProdutolistComponent} from './produtolist/produtolist.component'
import {TabelaComponent} from './tabela/tabela.component'
import {TabelalistComponent} from './tabelalist/tabelalist.component'
import {ClienteComponent} from './cliente/cliente.component'
import {ClientelistComponent} from './clientelist/clientelist.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {UsuariolistComponent} from './usuariolist/usuariolist.component'
import {OrdemComponent} from './ordem/ordem.component'
import {OrdemlistComponent} from './ordemlist/ordemlist.component'


export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'classes', component: ClasseComponent, pathMatch: 'full' },
      { path: 'classes/:id', component: ClasseComponent, pathMatch: 'full' },
      { path: 'classeslist', component: ClasselistComponent, pathMatch: 'full' },
      { path: 'produtos', component: ProdutoComponent, pathMatch: 'full' },
      { path: 'produtos/:id', component: ProdutoComponent, pathMatch: 'full' },
      { path: 'produtoslist', component: ProdutolistComponent, pathMatch: 'full' },
      { path: 'tabelas', component: TabelaComponent, pathMatch: 'full' },
      { path: 'tabelas/:id', component: TabelaComponent, pathMatch: 'full' },
      { path: 'tabelaslist', component: TabelalistComponent, pathMatch: 'full' },
      { path: 'clientes', component: ClienteComponent, pathMatch: 'full' },
      { path: 'clientes/:id', component: ClienteComponent, pathMatch: 'full' },
      { path: 'clienteslist', component: ClientelistComponent, pathMatch: 'full' },
      { path: 'usuarios', component: UsuarioComponent, pathMatch: 'full' },
      { path: 'usuarios/:id', component: UsuarioComponent, pathMatch: 'full' },
      { path: 'usuarioslist', component: UsuariolistComponent, pathMatch: 'full' },
      { path: 'ordens', component: OrdemComponent, pathMatch: 'full' },
      { path: 'ordens/:id', component: OrdemComponent, pathMatch: 'full' },
      { path: 'ordemlist', component: OrdemlistComponent, pathMatch: 'full' },
   ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
