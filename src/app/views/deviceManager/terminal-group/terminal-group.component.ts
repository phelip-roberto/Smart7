import { Component, OnInit } from '@angular/core';

import { Message } from '../../../domain/message';
import { TerminalGroup } from './../../../domain/terminalGroup';
import { Terminal } from '../../../domain/terminal';


@Component({
  selector: 'app-terminal-group',
  templateUrl: './terminal-group.component.html',
  styleUrls: ['./terminal-group.component.scss']
})
export class TerminalGroupComponent implements OnInit {

  msgs: Message[] = [];

  terminalGroup: TerminalGroup = {
    name: '',
    description: '',
    default: true,
    wallpaper: '',
    profile: '',
    terminal: '',
    appCategory: '',
    app: '',
    appVersion: ''
  };

  terminal: Terminal = {
    serialNumber: '',
    imei: '',
    model: '',
    batteryLevel: 75,
    geolocation: '',
    signalLevel: 30,
    terminalGroup: '',
    lastCom: ''
  };

  table1: any = [
    { imei: 'teste', serial: 'teste', group: 'teste' },
    { imei: 'teste', serial: 'teste', group: 'teste' },
    { imei: 'teste', serial: 'teste', group: 'teste' },
    { imei: 'teste', serial: 'teste', group: 'teste' },
  ];

  table2: any = [
    { imei: 'teste', serial: 'teste' },
    { imei: 'teste', serial: 'teste' },
    { imei: 'teste', serial: 'teste' },
    { imei: 'teste', serial: 'teste' },
  ];

  table3: any = [
    { category: 'teste', developer: 'teste', app: 'teste', version: 'teste' },
    { category: 'teste', developer: 'teste', app: 'teste', version: 'teste' },
    { category: 'teste', developer: 'teste', app: 'teste', version: 'teste' },
    { category: 'teste', developer: 'teste', app: 'teste', version: 'teste' },
  ];


  uploadedFiles: any[] = [];

  constructor() { }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  ngOnInit() {
  }

  save() {
    this.msgs.push({severity: 'success', summary: 'Informações Salvas!',
      detail: 'As informações sobre o grupo de terminal foram salvas com sucesso!'});
  }

}
