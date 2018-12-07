import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service'

@Component({
  selector: 'vision-clientelist',
  templateUrl: './clientelist.component.html',
  styleUrls: ['./clientelist.component.css']
})
export class ClientelistComponent implements OnInit {


  listaClientes: any[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getList()
  }
  excluir(id: number) {
    this.clienteService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }
  getList() {
    this.clienteService.getList().subscribe(
      retorno => {
        this.listaClientes = retorno
      }
    )
  }
}

