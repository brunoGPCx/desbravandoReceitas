import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perfil5Page } from './perfil5.page';

const routes: Routes = [
  {
    path: '',
    component: Perfil5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perfil5PageRoutingModule {}
