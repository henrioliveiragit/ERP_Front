import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {trigger, state, style, animate, transition} from '@angular/animations'
class AppModule { }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
  
      ],
})
export class AppComponent {
  title = 'erpdebolso';
}
