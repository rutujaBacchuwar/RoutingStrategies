import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component'
import { Component2Component } from './component2/component2.component'
import { Component3Component } from './component3/component3.component'

const routes: Routes = [
  {
    path: "home",
    component: Component1Component
  },
  {
    path: "xyz/:id",
    component: Component2Component
  },
  {
    path: "abc",
    component: Component3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
