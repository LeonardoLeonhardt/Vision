import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './login.routing';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        //componentes
        LoginComponent,
        ]
})

export class LoginModule { }
