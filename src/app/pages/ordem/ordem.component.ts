import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdemService } from '../../services/ordem.service';
import { ClienteService } from '../../services/cliente.service'
import { ProdutoService } from '../../services/produto.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent implements OnInit {

  formulario: FormGroup
  public router: Router
  listaClientes : any[] = []
  listaProdutos : any[] = []


  constructor(router: Router, private formBuilder: FormBuilder, 
    private ordemService: OrdemService, 
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,

  ) {
    this.router = router;

  }

  ngOnInit() {
    this.getCliente()
    this.getProdutos()
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      cliente: this.formBuilder.control(''),
      ordemproduto: this.formBuilder.control(''),
      data_abe: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      data_ent: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      status: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      valor: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),  
    })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.ordemService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['cliente'].setValue(retorno.cliente);
        this.formulario.controls['ordemproduto'].setValue(retorno.ordemproduto);
        this.formulario.controls['data_abe'].setValue(retorno.data_abe);
        this.formulario.controls['data_ent'].setValue(retorno.data_ent);
        this.formulario.controls['status'].setValue(retorno.status);
        this.formulario.controls['valor'].setValue(retorno.valor);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let ordem = { 'cliente': formulario.value.cliente,'ordemproduto': formulario.value.ordemproduto, 'data_abe': formulario.value.data_abe,'data_ent': formulario.value.data_ent,'status': formulario.value.status,'valor': formulario.value.valor}
    if (formulario.value.id == 0) {
      
      this.ordemService.save(ordem)
        .subscribe(retorno => {
          this.router.navigate(['pages/ordemlist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.ordemService.update(ordem, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/ordemlist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  getCliente(){
    this.clienteService.getList().subscribe(retorno => {
      this.listaClientes = retorno
          })
  }
  getProdutos(){
    this.produtoService.getList().subscribe(retorno => {
      this.listaProdutos = retorno
          })
  }

}
