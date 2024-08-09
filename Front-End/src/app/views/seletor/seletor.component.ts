/* Login version: 
Signature: 
Last Changes Author: 
Observations: None
 */

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-seletor',
  standalone: true,
  imports: [MaterialModule, NgxMaskDirective],
  templateUrl: './seletor.component.html',
  styleUrl: './seletor.component.scss'
})
export class SeletorComponent implements OnInit {
  constructor(private router: Router) { }

  NomeUsuario: any

  ngOnInit(): void {
    this.validarLogged()
    this.NomeUsuario = sessionStorage.getItem("Nome")
  }

  validarLogged() {
    if (sessionStorage.getItem("Logged") != "1") {
      this.router.navigate(["./login"])
    }
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
  
  modulos = [{
    nome: "Serviços",
    filial: "0101"
  },
  {
    nome: "Financeiro",
    filial: "0101"
  },
  {
    nome: "Clientes",
    filial: "0102"
  },
  ]
}
