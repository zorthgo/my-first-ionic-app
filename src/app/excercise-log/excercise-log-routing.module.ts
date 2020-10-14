import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcerciseLogPage } from './excercise-log.page';

const routes: Routes = [
  {
    path: '',
    component: ExcerciseLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcerciseLogPageRoutingModule {}
