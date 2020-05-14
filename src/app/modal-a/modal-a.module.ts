import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ModalAComponent } from './modal-a.component';
import { ModalAWrapperComponent } from './modal-a-wrapper.component';

@Component({
  selector: 'empty-component',
  template: ''
})
export class EmptyComponent {
  constructor() {
    console.log('empty component');
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalAWrapperComponent
      }
    ]),
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    EmptyComponent,
    ModalAComponent,
    ModalAWrapperComponent
  ],
  entryComponents: [
    ModalAComponent
  ]
})
export class ModalAModule {
  constructor() {
    console.log('modal a module loaded');
  }
}
