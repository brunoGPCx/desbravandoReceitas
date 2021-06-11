import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil6Page } from './perfil6.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil6PageRoutingModule {}
