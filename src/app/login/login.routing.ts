import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login.component';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);