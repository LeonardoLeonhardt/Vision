import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { TabelaService } from '../../services/tabela.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario: FormGroup
  public router: Router
  listaTabelas : any[] = []


  constructor(router: Router, private formBuilder: FormBuilder, 
    private clienteService: ClienteService, 
    private route: ActivatedRoute,
    private tabelaService: TabelaService,

  ) {
    this.router = router;

  }

  ngOnInit() {
    this.getList()
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      cnpj: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      tabela: this.formBuilder.control(''),
      saldo: this.formBuilder.control('', [Validators.required, Validators.minLength(1)])
      })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.clienteService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
        this.formulario.controls['cnpj'].setValue(retorno.cnpj);
        this.formulario.controls['tabela'].setValue(retorno.tabela);
        this.formulario.controls['saldo'].setValue(retorno.saldo);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let cliente = { 'nome': formulario.value.nome,'cnpj': formulario.value.cnpj, 'tabela': formulario.value.tabela, 'saldo': formulario.value.saldo}
    if (formulario.value.id == 0) {
      
      this.clienteService.save(cliente)
        .subscribe(retorno => {
          this.router.navigate(['pages/clienteslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.clienteService.update(cliente, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/clienteslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  getList(){
    this.tabelaService.getList().subscribe(retorno => {
      this.listaTabelas = retorno
          })
  }

}
