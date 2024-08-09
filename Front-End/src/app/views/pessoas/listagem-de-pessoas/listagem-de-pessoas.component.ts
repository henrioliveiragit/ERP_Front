import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../../components/topbar/topbar.component';

@Component({
  selector: 'app-listagem-de-pessoas',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent],
  templateUrl: './listagem-de-pessoas.component.html',
  styleUrl: './listagem-de-pessoas.component.scss'
})
export class ListagemDePessoasComponent {

}
