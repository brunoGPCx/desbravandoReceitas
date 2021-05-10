import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vermais1PageRoutingModule } from './vermais1-routing.module';

import { Vermais1Page } from './vermais1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vermais1PageRoutingModule
  ],
  declarations: [Vermais1Page]
})
export class Vermais1PageModule {}
