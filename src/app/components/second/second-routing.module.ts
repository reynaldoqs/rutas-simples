import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from "./second.component";
import { SFComponent } from "./s-f/s-f.component";
import { SSComponent } from "./s-s/s-s.component";

const routes: Routes = [
  {
    path:'',component:SecondComponent,
    children:[
        {
          path:'first',component:SFComponent
        },
        {
          path:'second',component:SSComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {}