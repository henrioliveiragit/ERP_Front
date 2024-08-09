import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { MaterialModule } from '../../modules/material.module';
import { AcessosService } from '../../services/acessos.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  constructor(private acessosService: AcessosService){}

  objAcessos: any

  ngOnInit(): void {
    this.objAcessos = this.acessosService.getAll()
  }

}
