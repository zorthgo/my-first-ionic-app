import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcerciseLogPageRoutingModule } from './excercise-log-routing.module';

import { ExcerciseLogPage } from './excercise-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcerciseLogPageRoutingModule
  ],
  declarations: [ExcerciseLogPage]
})
export class ExcerciseLogPageModule {}
