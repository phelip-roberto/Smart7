import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MessageService } from './../../service/service-message.service';
import { ToastModule } from 'primeng/toast';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ToastModule,
    GrowlModule
  ],
  providers: [
    MessageService
  ]
})
export class LoginModule { }
