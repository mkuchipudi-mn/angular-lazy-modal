import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRouterOutletComponent } from './feature-router-outlet.component';

import { FeatureRouterOutletRoutingModule } from './feature-router-outlet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRouterOutletRoutingModule
  ],
  exports: [
    FeatureRouterOutletRoutingModule
  ],
  declarations: [
    FeatureRouterOutletComponent
  ]
})
export class FeatureRouterOutletModule { }
