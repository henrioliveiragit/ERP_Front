import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-material-advanced-calendar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './material-advanced-calendar.component.html',
  styleUrl: './material-advanced-calendar.component.scss'
})
export class MaterialAdvancedCalendarComponent implements OnInit {

  nav = 0
  clicked = null;
  events: any[] = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events') as string) : [];
  weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  listaDias: string[] = []
  mes: any = ''
  ano: number = 0
  hoje: any = new Date().toLocaleDateString('pt-br',{
    day: 'numeric',
  })
  mesComparacao: any = new Date().toLocaleDateString('pt-br',{
    month: 'long',
  })
  anoComparacao: any = new Date().toLocaleDateString('pt-br',{
    year: 'numeric',
  })

  ngOnInit(): void {
    this.load(0)

  }
  load(nav:number) {
    const date = new Date();
    date.setMonth(new Date().getMonth() + nav);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.ano = year
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + nav, 0).getDate(); // pegando o ano + o próximo mês + o último dia do mês passado

    const dateString: string = firstDay.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    this.mes = firstDay.toLocaleDateString('pt-br',
      {
        month: 'long',
      }
    )
    const paddingDays = firstDay.getDay();
    let contador = 1;
    this.listaDias = []; 

    for (let index = 0; index < paddingDays + daysInMonth; index++) {
      if (index < paddingDays) {
        this.listaDias.push("");
      } else {
        this.listaDias.push(contador.toString());
        contador++;
      }
    }
  }
  proximoMes()
  {
    this.nav += 1
    this.load(this.nav)
  }
  anteriorMes()
  {
    this.nav -= 1
    this.load(this.nav)
  }
}


