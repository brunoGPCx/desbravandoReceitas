import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vermais1Page } from './vermais1.page';

const routes: Routes = [
  {
    path: '',
    component: Vermais1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vermais1PageRoutingModule {}
