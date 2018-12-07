import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario: FormGroup
  public router: Router

  constructor(router: Router, private formBuilder: FormBuilder, 
    private usuarioService: UsuarioService, 
    private route: ActivatedRoute,
  ) {
    this.router = router;

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      login: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.usuarioService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
        this.formulario.controls['email'].setValue(retorno.email);
        this.formulario.controls['login'].setValue(retorno.login);
        this.formulario.controls['senha'].setValue(retorno.senha);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let usuario = { 'nome': formulario.value.nome,'email': formulario.value.email,'login': formulario.value.login,'senha': formulario.value.senha}
    if (formulario.value.id == 0) {
      
      this.usuarioService.save(usuario)
        .subscribe(retorno => {
          this.router.navigate(['pages/usuarioslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.usuarioService.update(usuario, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/usuarioslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  

}
