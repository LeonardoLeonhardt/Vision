import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../../services/classe.service'

@Component({
  selector: 'vision-classelist',
  templateUrl: './classelist.component.html',
  styleUrls: ['./classelist.component.css']
})
export class ClasselistComponent implements OnInit {

  listaClasses: any[] = []

  constructor(private classeService: ClasseService) { }

  ngOnInit() {
    this.getList()
  }
  excluir(id: number) {
    this.classeService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }
  getList() {
    this.classeService.getList().subscribe(
      retorno => {
        this.listaClasses = retorno
      }
    )
  }
}

