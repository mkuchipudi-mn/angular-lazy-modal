import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-feature-no-router-outlet',
  template: `
    <h3>Feature Without Child Router Outlet</h3>

    <p>We can avoid using wrapper components and need of adding them to router or even adding child <code>router-outlet</code> by simply listening to router navigation in NgRx.</p>
    <p>In this case there is no need to define any empty routes.</p>

    <p class="links">
      <a routerLink="modal-c">Open Modal C</a>
    </p>
  `,
})
export class FeatureNoRouterOutletComponent  {}
