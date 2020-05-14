import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureNoRouterOutletComponent } from './feature-no-router-outlet.component';
import { FeatureNoRouterOutletRoutingModule } from './feature-no-router-outlet-routing.module';

@NgModule({
  imports: [
    CommonModule,

    FeatureNoRouterOutletRoutingModule
  ],
  exports: [
    FeatureNoRouterOutletRoutingModule
  ],
  declarations: [
    FeatureNoRouterOutletComponent
  ]
})
export class FeatureNoRouterOutletModule { }
