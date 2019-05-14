import { Component, OnInit } from '@angular/core';

import { Message } from '../../../domain/message';
import { CategoryGroup } from './../../../domain/categoryGroup';

@Component({
  selector: 'app-terminal-group',
  templateUrl: './terminal-group.component.html',
  styleUrls: ['./terminal-group.component.scss']
})
export class TerminalGroupComponent implements OnInit {

  msgs: Message[] = [];

  group: CategoryGroup = {
    defaultGroup: true
  };

  terminals: any = {
    imei: '',
    serial: '',
    model: '',
    app: '',
    version: ''
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
