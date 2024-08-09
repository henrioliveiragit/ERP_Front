import { Component } from '@angular/core';
import { TopbarComponent } from '../../../components/topbar/topbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-aprovar-os',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './aprovar-os.component.html',
  styleUrl: './aprovar-os.component.scss'
})
export class AprovarOsComponent {

}
