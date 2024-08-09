import { Component } from '@angular/core';
import { TopbarComponent } from '../../../components/topbar/topbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-listagem-de-os',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './listagem-de-os.component.html',
  styleUrl: './listagem-de-os.component.scss'
})
export class ListagemDeOsComponent {

}
