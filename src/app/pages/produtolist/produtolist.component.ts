import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service'

@Component({
  selector: 'vision-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.css']
})
export class ProdutolistComponent implements OnInit {

  listaProdutos: any[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getList()
  }
  excluir(id: number) {
    this.produtoService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }
  getList() {
    this.produtoService.getList().subscribe(
      retorno => {
        this.listaProdutos = retorno
      }
    )
  }
}

