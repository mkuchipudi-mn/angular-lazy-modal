import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';

import { ModalCComponent } from './modal-c.component';
import { ModalCEffects } from './modal-c.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,

    EffectsModule.forFeature([ ModalCEffects ])
  ],
  declarations: [
    ModalCComponent,
  ],
  entryComponents: [
    ModalCComponent
  ]
})
export class ModalCModule {
  constructor() {
    console.log('modal c module loaded');
  }
}
