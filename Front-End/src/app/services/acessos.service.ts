import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcessosService implements OnInit{

  constructor() { }

  listaCaminhos: any = []
  listaCategorias: any = []
  listaTemp: any = []
  categoria = ""

  ngOnInit(): void {
    this.popularListas()
  }

  private popularListas() {
    let listaRegistro: any = []
    for (let index = 0; index < this.dataTeste.length; index++) {

      if (index == 0) {
        this.categoria = this.dataTeste[index].categoria
        listaRegistro.push(this.dataTeste[index].categoria)
        this.listaTemp.push(this.dataTeste[index].caminho)
      }
      else {
        if (this.dataTeste[index].categoria == this.categoria) {
          this.listaTemp.push(this.dataTeste[index].caminho)
        }
        else {
          this.listaCaminhos.push(this.listaTemp)
          this.listaTemp = []
          this.categoria = this.dataTeste[index].categoria
          listaRegistro.push(this.dataTeste[index].categoria)
          this.listaTemp.push(this.dataTeste[index].caminho)
        }
      }
    }
    this.listaCategorias = listaRegistro
    this.listaCaminhos.push(this.listaTemp)
    this.listaTemp = []
  }

  getAll() {
    return this.dataTeste
  }

  private dataTeste = [
    {
      id: "1",
      filial: "0101",
      categoria: "Home",
      nome: "Dashboard",
      caminho: "dashboard",
      icone: "dashboard"
    },
    {
      id: "2",
      filial: "0101",
      modulo_id: "1",
      nome: "Lançar OS",
      categoria: "Ordens de Serviço",
      caminho: "servicos/lancar-os",
      icone: "add_circle"
    },
    {
      id: "3",
      filial: "0101",
      modulo_id: "1",
      nome: "Aprovar OS",
      categoria: "Ordens de Serviço",
      caminho: "servicos/aprovar-os",
      icone: "check_circle"
    },
    {
      id: "4",
      filial: "0101",
      modulo_id: "1",
      nome: "Listagem de OS",
      categoria: "Ordens de Serviço",
      caminho: "servicos/listagem-de-os",
      icone: "list"
    },
    {
      id: "5",
      filial: "0101",
      modulo_id: "1",
      nome: "Listagem de Pessoas",
      categoria: "Pessoas",
      caminho: "pessoas/listagem-de-pessoas",
      icone: "list"
    }
  ]


}
