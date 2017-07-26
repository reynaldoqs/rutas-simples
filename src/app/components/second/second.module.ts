import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from "./second.component";
import { SFComponent } from './s-f/s-f.component';
import { SSComponent } from './s-s/s-s.component';


@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [
    SecondComponent, 
    SFComponent, SSComponent
  ]
})
export class SecondModule { }
