import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceManagerComponent } from './deviceManager.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceManagerComponent,
    data: {
      title: 'DeviceManager'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceManagerRoutingModule {}
