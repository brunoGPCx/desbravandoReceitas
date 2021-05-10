import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vermais4Page } from './vermais4.page';

const routes: Routes = [
  {
    path: '',
    component: Vermais4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vermais4PageRoutingModule {}
