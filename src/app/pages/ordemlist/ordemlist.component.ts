import { Component, OnInit } from '@angular/core';
import { OrdemService } from '../../services/ordem.service'


@Component({
  selector: 'vision-ordemlist',
  templateUrl: './ordemlist.component.html',
  styleUrls: ['./ordemlist.component.css']
})
export class OrdemlistComponent implements OnInit {

  listaOrdens: any[] = []
  
  constructor(private tabelaService: OrdemService) { }

  ngOnInit() {
    this.getList()
  }
  excluir(id: number) {
    this.tabelaService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }
  getList() {
    this.tabelaService.getList().subscribe(
      retorno => {
        this.listaOrdens = retorno
      }
    )
  }
}

