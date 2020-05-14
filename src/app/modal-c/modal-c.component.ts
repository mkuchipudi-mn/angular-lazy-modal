import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ModalData {
  title: string;
  desc?: string;
  withLink?: boolean;
}

@Component({
  selector: 'my-modal-c',
  template: `
    <h1 mat-dialog-title>Modal C</h1>
    <div mat-dialog-content>
      <p>{{ data?.desc }}</p>
      <div *ngIf="data?.withLink" class="with-link">
        <p>With global effects (check app.effects.ts) we can automatically close all modals on navigation.</p> 
        <p><a routerLink="/overview">Go to Overview</a></p>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [`
    .with-link {
      background: #eee;
      padding: 4px 12px;
      border-radius: 5px;
    }
  `]
})
export class ModalCComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) { }
}
