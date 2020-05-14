import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-feature-router-outlet',
  template: `
    <h3>Feature With Child Router Outlet</h3>
    
    <p>Straight forward approach of simply using a wrapper component added to router used to call <code>dialog.open()</code> on <code>OnInit</code> hook.</p>
    <p class="links">
      <a routerLink="modal-a">Open Modal A</a>
    </p>

    <p>We can also use NgRx effects to handle opening a modal for us by simply dispatching action from wrapper component.</p>
    <p class="links">
      <a routerLink="modal-b">Open Modal B</a>
    </p>

    <router-outlet></router-outlet>
  `,
})
export class FeatureRouterOutletComponent  {}
