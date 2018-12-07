import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'vision-usuariolist',
  templateUrl: './usuariolist.component.html',
  styleUrls: ['./usuariolist.component.css']
})
export class UsuariolistComponent implements OnInit {

  listaUsuarios: any[] = []

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getList()
  }
  excluir(id: number) {
    this.usuarioService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }
  getList() {
    this.usuarioService.getList().subscribe(
      retorno => {
        this.listaUsuarios = retorno
      }
    )
  }
}

