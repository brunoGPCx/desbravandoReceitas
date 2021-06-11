import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil4Page } from './perfil4.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil4PageRoutingModule {}
