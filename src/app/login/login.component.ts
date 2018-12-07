import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'vision-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup
  public router: Router


  constructor(router: Router, private formBuilder: FormBuilder,private loginService: LoginService
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
    })
  }

  login(formulario: FormGroup) {
    let usuario = { 'username': formulario.value.username, 'password': formulario.value.password }
    this.loginService.login(usuario)
      .subscribe(retorno => {
        sessionStorage.setItem("token",retorno.token)
        this.router.navigate(['/pages'])

      }, err => {
        console.log("Erro ao efetuar login")
      })

  }


}