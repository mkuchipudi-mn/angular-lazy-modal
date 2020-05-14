import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

import { FeatureRouterOutletComponent } from './feature-router-outlet.component';

const routes = [
  {
    path: '',
    component: FeatureRouterOutletComponent,
    children: [
      {
        path: 'modal-a',
        loadChildren: () => import('../modal-a/modal-a.module').then(m => m.ModalAModule)
      },
      {
        path: 'modal-b',
        loadChildren: () => import('../modal-b/modal-b.module').then(m => m.ModalBModule)
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
export class FeatureRouterOutletRoutingModule { }
