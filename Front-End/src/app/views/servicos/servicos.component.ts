import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [MaterialModule, SidebarComponent, TopbarComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
