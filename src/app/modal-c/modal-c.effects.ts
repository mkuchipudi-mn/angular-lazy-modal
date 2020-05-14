import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { concatMap, filter, tap, map, withLatestFrom } from 'rxjs/operators';

import { selectUrl } from '../app.selectors';

import * as fromActions from './modal-c.actions';
import { ModalCComponent } from './modal-c.component';


@Injectable()
export class ModalCEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private dialog: MatDialog,
    private router: Router
  ) { }

  /**
   * Dispatch actions from router
   */
  onRouterAction$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    withLatestFrom(this.store.select(selectUrl)),
    filter(([_, url]) => url === '/feature-no-router-outlet/modal-c'),
    map(_ => fromActions.openModal())
  ));

  onOpenDialog$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.openModal),
    concatMap(_ => 
      this.dialog.open(ModalCComponent, { data: { withLink: true } })
        .afterClosed().pipe(
          filter(data => !(data && data['fromNavigation'])),
          map(data => fromActions.hasClosedModal())
        )
    )
  ));

  onNavigateToFeature$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.hasClosedModal),
    tap(_ => this.router.navigateByUrl('/feature-no-router-outlet'))
  ), { dispatch: false });
}
