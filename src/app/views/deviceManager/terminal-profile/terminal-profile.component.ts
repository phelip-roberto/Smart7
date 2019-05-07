import { Component, OnInit } from '@angular/core';

import { App } from './../../../domain/app';
import { Category } from '../../../domain/category';
import { Developers } from '../../../domain/developers';

import { AppsManagerService } from './../../../service/apps-manager.service';
import { DeviceManagerService } from './../../../service/device-manager.service';


@Component({
  selector: 'app-terminal-profile',
  templateUrl: './terminal-profile.component.html',
  styleUrls: ['./terminal-profile.component.scss']
})
export class TerminalProfileComponent implements OnInit {

  categorias: Category[];
  selectedCategory: any;
  empresas: Developers[];
  perifericos: any;
  acoes: any;
  availableApps: App[];
  selectedApps: App[];
  draggedApp: App;
  device: any = {
    nome: '',
    description: '',
    state: true,
    profile: true
  };

  constructor(private deviceService: DeviceManagerService,
    private appService: AppsManagerService) {

      this.perifericos = this.deviceService.getPerifericos();
      this.acoes = this.deviceService.getAcoes();

    }

  ngOnInit() {
    this.selectedApps = [];
    this.deviceService.getCategorias().then(categories => this.categorias = categories);
    this.deviceService.getEmpresas().then(companies => this.empresas = companies);
    this.appService.getApps().then(apps => this.availableApps = apps);
  }

  dragStart(event, app: App) {
    this.draggedApp = app;
  }

  drop(event) {
    if (this.draggedApp) {
      const draggedAppIndex = this.findIndex(this.draggedApp);
      this.selectedApps = [...this.selectedApps, this.draggedApp];
      this.availableApps = this.availableApps.filter((val, i) => i !== draggedAppIndex);
      this.draggedApp = null;
    }
  }

  dragEnd(event) {
    this.draggedApp = null;
  }

  findIndex(app: App) {
    let index = -1;
    for (let i = 0; i < this.availableApps.length; i++) {
      if (app.identifier === this.availableApps[i].identifier) {
        index = i;
        break;
      }
    }
    return index;
  }

}
