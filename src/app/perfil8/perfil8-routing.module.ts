import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil8Page } from './perfil8.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil8PageRoutingModule {}
