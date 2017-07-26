import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-second',
  template: `
  <h2>Lazy loading Route</h2>
<nav>
  <div>
      <ul class="nav navbar-nav">
        <li><a routerLink="first">Second > Fisrt</a></li>
        <li><a routerLink="second">Second > Second</a></li>
      </ul>
    </div>
</nav>
<router-outlet></router-outlet>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
