import { Component, HostListener, inject, model, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from '../../../components/topbar/topbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { MaterialModule } from '../../../modules/material.module';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMaskDirective } from 'ngx-mask';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
export interface Cliente {
  name: string;
}
@Component({
  selector: 'app-lancar-os',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [TopbarComponent, SidebarComponent, MaterialModule, AsyncPipe,
    MatAutocompleteModule, MatFormFieldModule, FormsModule, MatInputModule,
    ReactiveFormsModule, NgxMaterialTimepickerModule, NgxMaskDirective],
  templateUrl: './lancar-os.component.html',
  styleUrl: './lancar-os.component.scss'
})
export class LancarOsComponent {


  myControl = new FormControl<string | Cliente>('');
  clientes: Cliente[] = [{ name: 'Katrium' }, { name: 'ICS' }, { name: 'SLB' }];
  tipoOS = ["Normal", "Após às 18h", "Final de Semana", "Feriado"]
  readonly dialog = inject(MatDialog);
  osData = { cliente: '', especialista: '', status: '', tipo: '', dataInicial: '', entrada: '', almoco: '', translado: '', saida: '' }
  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TarefaOsDialog)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      }
    );
  }

  displayFn(user: Cliente): string {
    return user && user.name ? user.name : '';
  }

  salvar()
  {
    console.log(this.osData)
  }

  
}

@Component({
  selector: 'tarefa-os-dialog',
  templateUrl: 'tarefa-os.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MaterialModule,
    SidebarComponent
],
})
export class TarefaOsDialog {
  readonly dialogRef = inject(MatDialogRef<TarefaOsDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
