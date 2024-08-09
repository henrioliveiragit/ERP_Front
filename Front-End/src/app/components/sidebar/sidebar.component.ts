import { Component, OnInit, HostListener } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { Router } from '@angular/router';
import { AcessosService } from '../../services/acessos.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router,
    private acessosService: AcessosService
  ) { }

  shouldRun: boolean = true
  menuFixed: any
  selecionado = ""
  listaCaminhos: any = []
  listaCategorias: any = []
  listaTemp: any = []
  categoria = ""
  qntMenus = 0
  objAcessos: any

  ngOnInit(): void {
    this.validarLogged() //Validação
    this.menuFixed = sessionStorage.getItem("MenuFixed")
    this.menuFixed == '0' ? this.shouldRun = false : null
    this.objAcessos = this.acessosService.getAll()
    this.acessosService.ngOnInit()
    this.listaCaminhos = this.acessosService.listaCaminhos
    this.listaCategorias = this.acessosService.listaCategorias
    //seleciona o botão do menu de acordo com a rota
    this.selecionado = this.router.url.substring(1)
    this.montarMenu()
  }

  //Espera Eventos de Keydown
  @HostListener('window:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent): void { //Gera os Shortcuts de Acordo com os Acessos Disponíveis
    for (let index = 1; index < this.qntMenus + 1; index++) {
      if (event.altKey && event.key === index.toString()) {
        this.router.navigate([this.objAcessos[index - 1].caminho]);
        console.log(this.objAcessos[index - 1].caminho)
      }
    }
  }

  validarLogged() {
    if (sessionStorage.getItem("Logged") != "1") {
      this.router.navigate(["./login"])
    }
  }

  montarMenu() { //Varre o objeto que vem do servidor
    for (let index = 0; index < this.listaCaminhos.length; index++) {
      this.qntMenus = this.qntMenus + this.listaCaminhos[index].length;
    }
  }

  mudarMenu() {
    if (this.shouldRun == false) {
      this.shouldRun = true;
    }
    else {
      this.shouldRun = false;
    }
  }

  fixarBotao(){
    this.menuFixed == '1' ? this.menuFixed = '0' : this.menuFixed = '1'
    sessionStorage.setItem("MenuFixed", this.menuFixed)
    this.mudarMenu()
  }

  irPara(selecionadoParam?: any) {
    this.router.navigate(['/' + selecionadoParam])
  }

}
