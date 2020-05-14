import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'

import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { ModalAComponent } from './modal-a.component';

@Component({
  selector: 'my-modal-a-wrapper',
  template: ``
})
export class ModalAWrapperComponent implements OnInit, OnDestroy {

  private _subscriptions = new Subscription();

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    const data = {
      withLink: true
    }

    const dialogSubscription$ = this.dialog.open(ModalAComponent, { data, disableClose: true }).afterClosed().pipe(
      filter(data => !(data && data['fromNavigation'])),
      tap(_ =>
        this.router.navigate(['../'], {
          relativeTo: this.activatedRoute
        })
      )
    ).subscribe();

    this._subscriptions.add(dialogSubscription$);
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
