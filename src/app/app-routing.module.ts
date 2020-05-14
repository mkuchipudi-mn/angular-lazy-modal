import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { AppComponent } from './app.component';

const DIALOG_PATHS = [ 'modalA', 'modalB' ];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'feature-router-outlet',
        loadChildren: () => import('./feature-router-outlet/feature-router-outlet.module').then(
            mod => mod.FeatureRouterOutletModule
          )
      },
      {
        path: 'feature-no-router-outlet',
        loadChildren: () => import('./feature-no-router-outlet/feature-no-router-outlet.module').then(
            mod => mod.FeatureNoRouterOutletModule
          )
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'overview'
      }
    ],
    {
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}