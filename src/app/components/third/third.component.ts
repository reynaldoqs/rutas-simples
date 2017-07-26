import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-third',
  template: `
  <h2>Multiples Oulets</h2>
  <nav>
    <div>
        <ul class="nav navbar-nav">
          <li>
              <button md-button
              [routerLink]="['maya']">
              Speakers
            </button>
          </li>
          <li><a routerLink="maya">Third > Second</a></li>
        </ul>
      </div>
  </nav>
  <div class="outlet-1">
    <router-outlet></router-outlet>
  </div>

  `,
  styles: [`
  .outlet-1,.outlet-2{
    width:200px;
    height:100px;
    background:#d3d3d3;
    display:inline-block;
  }
  .outlet-2{
    background:#e1e1e1;
  }
  `]
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
