import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil7Page } from './perfil7.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil7PageRoutingModule {}
