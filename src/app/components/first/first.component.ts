import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-first',
  template: `
  <h2>Normal Route</h2>
<nav>
  <div>
      <ul class="nav navbar-nav">
        <li><a routerLink="first">First > Fisrt</a></li>
        <li><a routerLink="second">First > Second</a></li>
      </ul>
    </div>
</nav>
<router-outlet></router-outlet>
  `,
  styles: []
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
