import { Component, HostListener, inject, model, OnInit, signal } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  constructor(private router: Router) { }

  NomeUsuario: any

  ngOnInit(): void {
    this.NomeUsuario = sessionStorage.getItem('Nome')
  }

  logout() {
    this.router.navigate(['/login'])
  }
  
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  @HostListener('window:keydown.alt.q', ['$event'])
  showPinned(event: KeyboardEvent) {
    event.preventDefault();
    this.openDialog();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'pesquisa-dialog.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MaterialModule
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
