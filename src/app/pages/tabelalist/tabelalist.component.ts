import { Component, OnInit } from '@angular/core';
import { TabelaService } from '../../services/tabela.service'

@Component({
  selector: 'vision-tabelalist',
  templateUrl: './tabelalist.component.html',
  styleUrls: ['./tabelalist.component.css']
})
export class TabelalistComponent implements OnInit {

  listaTabelas: any[] = []

  constructor(private tabelaService: TabelaService) { }

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
        this.listaTabelas = retorno
      }
    )
  }
}

