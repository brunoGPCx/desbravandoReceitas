import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vermais3PageRoutingModule } from './vermais3-routing.module';

import { Vermais3Page } from './vermais3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vermais3PageRoutingModule
  ],
  declarations: [Vermais3Page]
})
export class Vermais3PageModule {}
