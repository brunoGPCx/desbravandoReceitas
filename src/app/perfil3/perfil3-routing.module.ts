import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil3Page } from './perfil3.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil3PageRoutingModule {}
