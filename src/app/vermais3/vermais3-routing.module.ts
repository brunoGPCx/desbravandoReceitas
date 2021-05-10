import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vermais3Page } from './vermais3.page';

const routes: Routes = [
  {
    path: '',
    component: Vermais3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vermais3PageRoutingModule {}
