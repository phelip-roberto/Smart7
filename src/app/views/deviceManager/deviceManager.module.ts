import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

// Page
import { DeviceManagerRoutingModule } from './deviceManager-routing.module';
import { TerminalGroupComponent } from './terminal-group/terminal-group.component';
import { TerminalProfileComponent } from './terminal-profile/terminal-profile.component';
import { TerminalComponent } from './terminal/terminal.component';

// Componentes Visuais
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';

// Services
import { AppsManagerService } from './../../service/apps-manager.service';
import { DeviceManagerService } from '../../service/device-manager.service';


@NgModule({
  imports: [
    FormsModule,
    DeviceManagerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbTabsetModule,
    CommonModule,
    TableModule,
    DragDropModule
  ],
  declarations: [ TerminalGroupComponent, TerminalProfileComponent, TerminalComponent ],
  providers: [
    DeviceManagerService,
    AppsManagerService
  ]
})
export class DeviceManagerModule { }
