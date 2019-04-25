import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DeviceManagerComponent } from './deviceManager.component';
import { DeviceManagerRoutingModule } from './deviceManager-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DeviceManagerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DeviceManagerComponent ]
})
export class DeviceManagerModule { }
