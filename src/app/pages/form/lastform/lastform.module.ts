import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastformPageRoutingModule } from './lastform-routing.module';

import { LastformPage } from './lastform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastformPageRoutingModule
  ],
  declarations: [LastformPage]
})
export class LastformPageModule {}
