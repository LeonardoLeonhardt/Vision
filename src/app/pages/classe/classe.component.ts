import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from '../../services/classe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  formulario: FormGroup
  public router: Router

  constructor(router: Router, private formBuilder: FormBuilder, 
    private classeService: ClasseService, 
    private route: ActivatedRoute,
  ) {
    this.router = router;

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.classeService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let classe = { 'nome': formulario.value.nome}
    if (formulario.value.id == 0) {
      
      this.classeService.save(classe)
        .subscribe(retorno => {
          this.router.navigate(['pages/classeslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.classeService.update(classe, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/classeslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  

}
