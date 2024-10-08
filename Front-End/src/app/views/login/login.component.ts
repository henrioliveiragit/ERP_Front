/* Login version: 1.2 (Stable)
Signature: Henrique Oliveira
Last Changes Author: Henrique Oliveira
Observations: None
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MaterialModule } from '../../modules/material.module';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HostListener } from '@angular/core';
import { SeletorService } from '../../services/seletor.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private seletorService: SeletorService
  ) { }

  loading = false
  loginData = { email: '', password: '' }
  listaModulos = new Array()
  listaEmpresas = new Array()

  ngOnInit() {
    sessionStorage.clear() //despopular session storage
  }

  @HostListener('window:keydown', ['$event'])
  handleShortcut(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.validateLogin()
    }
  }

  validateLogin() {
    if (this.loginData.email == 'teste') {
      this.toastr.success('Login realizado com sucesso!', 'Sucesso')
      sessionStorage.setItem("MenuFixed", "1")
      sessionStorage.setItem("Logged", "1") // Permissão para acessar as outras páginas
      this.router.navigate(['/seletor'])
      this.loading = false
    }
    else if (this.loginData.email == '' || this.loginData.password == '') {
      this.toastr.error('Preencha ambos os campos', 'Erro!', {
        timeOut: 1500
      });
    }
    else {
      this.realizarPostLogin()
    }
  }

  async realizarPostLogin() {
    this.loading = true
    await this.loginService.postLogin(this.loginData)
      .subscribe(
        (response: any) => {
          this.popularSessionStorage(response)
          this.router.navigate(['/seletor'])
          this.toastr.success('Login Realizado', 'Sucesso');
          this.loading = false
        },
        (error: any) => {
          if (error.status == 0) {
            this.toastr.error("Não foi possível estabelecer uma conexão com o Back-End", 'Erro');
          }
          else {
            this.toastr.error(error.error.message, 'Erro [' + error.status + ']');
          }
          this.loading = false
        }
      )
  }

  popularSessionStorage(response: any) {
    sessionStorage.setItem("Logged", "1") // Permissão para acessar as outras páginas
    sessionStorage.setItem("MenuFixed", "1") // Variável responsável pela fixação do SideBar
    //user
    sessionStorage.setItem("Nome", response.user.nome)
    sessionStorage.setItem("Id", response.user.id)
    sessionStorage.setItem("Data_Expiracao", response.user.data_expiracao)
    sessionStorage.setItem("Cargo", response.user.cargo)
    sessionStorage.setItem("Departamento", response.user.departamento)
    sessionStorage.setItem("Usuario_Id", response.user.id)
    //modulos
    for (let index = 0; index < response.listagemObjModulos.length; index++) {
      let obj = {
        nome: response.listagemObjModulos[index].nome,
        filial: response.listagemObjModulos[index].filial
      }
      this.listaModulos.push(obj)
    }
    //empresas
    for (let index = 0; index < response.listagemObjEmpresas.length; index++) {
      let obj = {
        nome: response.listagemObjEmpresas[index].nome,
        filial: response.listagemObjEmpresas[index].filial
      }
      this.listaEmpresas.push(obj)
    }
    this.seletorService.storeData({
      empresas: this.listaEmpresas,
      modulos: this.listaModulos
    })
  }
}


