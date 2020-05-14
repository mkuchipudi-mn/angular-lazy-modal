import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromActions from './modal-b.actions';

@Component({
  selector: 'my-modal-b',
  template: ``
})
export class ModalBWrapperComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.openModal());
  }
}
