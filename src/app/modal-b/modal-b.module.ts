import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';

import { ModalBComponent } from './modal-b.component';
import { ModalBWrapperComponent } from './modal-b-wrapper.component';
import { ModalBEffects } from './modal-b.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalBWrapperComponent
      }
    ]),
    MatButtonModule,
    MatDialogModule,

    EffectsModule.forFeature([ ModalBEffects ])
  ],
  declarations: [
    ModalBComponent,
    ModalBWrapperComponent
  ],
  entryComponents: [
    ModalBComponent
  ]
})
export class ModalBModule {
  constructor() {
    console.log('modal b module loaded');
  }
}
