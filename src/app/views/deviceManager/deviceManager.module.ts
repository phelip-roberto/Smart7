import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

//Page
import { DeviceManagerComponent } from './deviceManager.component';
import { DeviceManagerRoutingModule } from './deviceManager-routing.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    DeviceManagerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbTabsetModule,
    CommonModule
  ],
  declarations: [ DeviceManagerComponent ]
})
export class DeviceManagerModule { }
