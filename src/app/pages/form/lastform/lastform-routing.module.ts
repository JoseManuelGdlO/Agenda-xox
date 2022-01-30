import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastformPage } from './lastform.page';

const routes: Routes = [
  {
    path: '',
    component: LastformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastformPageRoutingModule {}
