/* Login version: 
Signature: 
Last Changes Author: 
Observations: None
 */

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { SeletorService } from '../../services/seletor.service';

@Component({
  selector: 'app-seletor',
  standalone: true,
  imports: [MaterialModule, NgxMaskDirective, FormsModule],
  templateUrl: './seletor.component.html',
  styleUrl: './seletor.component.scss'
})
export class SeletorComponent implements OnInit {
  constructor(private router: Router, private seletorService: SeletorService) { }

  NomeUsuario: any
  modulos: any = []
  empresas: any = []
  seletorData: any = {empresas: [], modulos: []}

  ngOnInit(): void {
    this.validarLogged()
    this.handleSessionStorage()
    this.seletorData = this.seletorService.retrieveData()
    console.log(this.seletorData)
  }

  validarLogged() {
    if (sessionStorage.getItem("Logged") != "1") {
      this.router.navigate(["./login"])
    }
  }

  handleSessionStorage() {
    this.NomeUsuario = sessionStorage.getItem("Nome")
  }

  handleFilial(empresa: any)
  {
 
  }

  handleModulos(filial: any)
  {
    this.seletorData.modulos.forEach((modulo: { filial: any; }) => {
      if (modulo.filial == filial) {
        this.modulos.push(modulo)
      }
    });
  }

  seletorForm = new FormGroup({
    filial: new FormControl('')
  })

  voltar() {
    this.router.navigate(['/login'])
  }

  prosseguir() {
    this.router.navigate(['/dashboard'])
  }



}
