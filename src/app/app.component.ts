import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog-bug';
  data = [1, 2, 3, 4, 5];

  constructor(private matDialog: MatDialog) { }

  openDialog() {
    this.matDialog.open(DialogComponent);
  }
}
