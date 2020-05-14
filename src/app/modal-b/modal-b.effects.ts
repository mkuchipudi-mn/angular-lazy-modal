import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { Action, Store, createFeatureSelector } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, ROUTER_NAVIGATED, RouterReducerState, getSelectors } from '@ngrx/router-store';
import { concatMap, filter, tap, map, withLatestFrom } from 'rxjs/operators';

import * as fromActions from './modal-b.actions';
import { ModalBComponent } from './modal-b.component';


@Injectable()
export class ModalBEffects {

  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private router: Router
  ) { }


  onOpenDialog$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.openModal),
    concatMap(_ => 
      this.dialog.open(ModalBComponent, { data: { withLink: true } })
        .afterClosed().pipe(
          filter(data => !(data && data['fromNavigation'])),
          map(_ => fromActions.closeModal())
        )
    )
  ));

  onNavigateToFeature$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.closeModal),
    tap(_ => this.router.navigateByUrl('/feature-router-outlet'))
  ), { dispatch: false });
}
