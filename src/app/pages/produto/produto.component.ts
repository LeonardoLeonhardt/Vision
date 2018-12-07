import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ClasseService } from '../../services/classe.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vision-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  formulario: FormGroup
  public router: Router
  listaClasses : any[] = []


  constructor(router: Router, private formBuilder: FormBuilder, 
    private produtoService: ProdutoService, 
    private route: ActivatedRoute,
    private classeService: ClasseService,

  ) {
    this.router = router;

  }

  ngOnInit() {
    this.getList()
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      preco: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      classe: this.formBuilder.control('')
      })

    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })
  }

  get(id: number) {
    this.produtoService.get(id)
      .subscribe(retorno => {

        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
        this.formulario.controls['preco'].setValue(retorno.preco);
        this.formulario.controls['classe'].setValue(retorno.classe);
       
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }

  salvar(formulario: FormGroup) {

    let produto = { 'nome': formulario.value.nome,'preco': formulario.value.preco, 'classe': formulario.value.classe}
    if (formulario.value.id == 0) {
      
      this.produtoService.save(produto)
        .subscribe(retorno => {
          this.router.navigate(['pages/produtoslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })

    } else {

      this.produtoService.update(produto, formulario.value.id)
        .subscribe(retorno => {
          this.router.navigate(['pages/produtoslist'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })


    }
  }
  getList(){
    this.classeService.getList().subscribe(retorno => {
      this.listaClasses = retorno
          })
  }

}
