import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vermais2Page } from './vermais2.page';

const routes: Routes = [
  {
    path: '',
    component: Vermais2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vermais2PageRoutingModule {}
