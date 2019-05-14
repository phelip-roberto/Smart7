import { Component, OnInit } from '@angular/core';

import { Message } from '../../../domain/message';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  msgs: Message[] = [];

  aplicativos: any = [
    { category: 'Pagamento', developer: 'GER7', app: 'POS7', version: '143141.02' },
    { category: 'Loja Aplicativos', developer: 'GER7', app: 'SMART7 Store', version: '1.2.1' },
    { category: 'Automação Cafeteria', developer: '7Seven Sistemas', app: 'XPTO sistema', version: '1.9.6' },
    { category: 'Uso Geral', developer: 'Gdev Sistemas', app: 'Divide Conta', version: '1.57' },
  ];

  batteryLevel = 100;
  batteryIcon: any;

  terminalInfos: any = {
    imei: '7041972123515',
    producer: 'Gertec',
    lastCom: '09/05/2019 10:12:52',
    serial: '872364192834412',
    model: 'GPOS700'
  };

  constructor() {

  }

  ngOnInit() {
    this.batteryIcon = this.battery();
  }

  battery() {
    if (this.batteryLevel <= 10) {
      return 'fa-battery-0 text-darkgrey';
    } else if (this.batteryLevel > 10 && this.batteryLevel < 50) {
      return 'fa-battery-1 text-red';
    } else if (this.batteryLevel == 50) {
      return 'fa-battery-2 text-orange';
    } else if (this.batteryLevel > 50 && this.batteryLevel < 80) {
      return 'fa-battery-3 text-yellow';
    } else {
      return 'fa-battery-4 text-green-whatsapp';
    }
  }

  save() {
    this.msgs.push({severity: 'success', summary: 'Recuperação de Senha',
      detail: 'Um e-mail foi enviado para que você possa recuperar sua senha!'});
  }
}
