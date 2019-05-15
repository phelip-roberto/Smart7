import { Component, OnInit } from '@angular/core';

import { App } from './../../../domain/app';
import { Category } from '../../../domain/category';
import { Developer } from '../../../domain/developer';
import { Message } from '../../../domain/message';

import { AppsManagerService } from './../../../service/apps-manager.service';
import { DeviceManagerService } from './../../../service/device-manager.service';


@Component({
  selector: 'app-terminal-profile',
  templateUrl: './terminal-profile.component.html',
  styleUrls: ['./terminal-profile.component.scss']
})
export class TerminalProfileComponent implements OnInit {

  categorias: Category[];
  selectedCategory: Category;
  empresas: Developer[];
  selectedCompany: Developer;
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

  msgs: Message[] = [];

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
      if (app.id === this.availableApps[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  save() {
    this.msgs.push({severity: 'success', summary: 'Informações Salvas!',
      detail: 'As informações sobre o perfil de terminal foram salvas com sucesso!'});
  }
}
