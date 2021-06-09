import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Termos1Page } from './termos1.page';

const routes: Routes = [
  {
    path: '',
    component: Termos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Termos1PageRoutingModule {}
