import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabelaService } from '../../services/tabela.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  formulario: FormGroup
  public router: Router

  constructor(router: Router, private formBuilder: FormBuilder, 
    private tabelaService: TabelaService, 
    private route: ActivatedRoute,
  ) {
    this.router = router;

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      percentual: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.tabelaService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
        this.formulario.controls['percentual'].setValue(retorno.percentual);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let tabela = { 'nome': formulario.value.nome, 'percentual': formulario.value.percentual}
    if (formulario.value.id == 0) {
      
      this.tabelaService.save(tabela)
        .subscribe(retorno => {
          this.router.navigate(['pages/tabelaslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.tabelaService.update(tabela, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/tabelaslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  

}
