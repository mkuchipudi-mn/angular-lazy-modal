import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

import { FeatureNoRouterOutletComponent } from './feature-no-router-outlet.component';

const routes = [
  {
    path: '',
    component: FeatureNoRouterOutletComponent,
    children: [
      {
        path: 'modal-c',
        loadChildren: () => import('../modal-c/modal-c.module').then(m => m.ModalCModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureNoRouterOutletRoutingModule { }
