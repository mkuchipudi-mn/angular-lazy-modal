import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'

import { Action, Store, createFeatureSelector } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, ROUTER_NAVIGATED } from '@ngrx/router-store';

import { exhaustMap, filter, tap, map, withLatestFrom } from 'rxjs/operators';


@Injectable()
export class AppEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private dialog: MatDialog
  ) { }

  /**
  * We can globally close all dialogs on navigation
  */
  closeAllModalsOnNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map(_ =>
      this.dialog.openDialogs
        .filter(dialogRef => !dialogRef.disableClose)
    ),
    filter(openDialogs => !!openDialogs.length),
    tap(openDialogs =>
      openDialogs
        .forEach(dialog => dialog.close({ fromNavigation: true }))
    )
  )
  , { dispatch: false });
}
