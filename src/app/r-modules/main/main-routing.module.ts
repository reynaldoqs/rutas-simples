import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from "../../components/first/first.component";
import { ThirdComponent } from "../../components/third/third.component";
import { FFComponent } from "../../components/first/f-f/f-f.component";
import { FSComponent } from "../../components/first/f-s/f-s.component";
const routes: Routes = [
  {
    path:'',redirectTo:'/first', pathMatch:'full'
  },
  {
    path:'first', component:FirstComponent,
    children:[
      {
        path:'first',component:FFComponent
      },
      {
        path:'second',component:FSComponent
      }
    ]
  },
  {
    path:'second',loadChildren:'../../components/second/second.module#SecondModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
export const routingComponents = [FirstComponent,ThirdComponent,
                                  FFComponent,FSComponent];