import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminalProfileComponent } from './terminal-profile/terminal-profile.component';
import { TerminalGroupComponent } from './terminal-group/terminal-group.component';
import { TerminalComponent } from './terminal/terminal.component';

// Pages


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'deviceManager'
      },
      {
        path: 'profile',
        component: TerminalProfileComponent,
        data: {
          title: 'Perfil'
        }
      },
      {
        path: 'group',
        component: TerminalGroupComponent,
        data: {
          title: 'Grupo de Terminais'
        }
      },
      {
        path: 'terminal',
        component: TerminalComponent,
        data: {
          title: 'Terminais'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceManagerRoutingModule {}
