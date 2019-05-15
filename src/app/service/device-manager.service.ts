import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Developer } from './../domain/developer';
import { Category } from './../domain/category';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagerService {

  constructor(private Http: HttpClient) { }

  getAcoes() {
    return [
      { id: 1, name: 'Bloqueio de Chamadas de Voz', value: true },
      { id: 2, name: 'Acesso à Barra de Configurações/Notificações', value: true },
      { id: 3, name: 'Personalização Tela de Fundo', value: false },
      { id: 4, name: 'Atualização Automática', value: true },
      { id: 5, name: 'Atualização Somente com Wi-Fi', value: true },
    ];
  }

  getPerifericos() {
    return [
      { id: 1, name: 'Wi-Fi', value: true },
      { id: 2, name: 'Bluetooth', value: true },
      { id: 3, name: 'GPRS/3G/4G', value: false },
      { id: 4, name: 'Câmera', value: true },
      { id: 5, name: 'Leito Biométrico', value: true },
    ];
  }

  getEmpresas() {
    return this.Http.get<any>('assets/data/developers.json')
      .toPromise()
      .then(res => <Developer[]>res.data)
      .then(data => data);
  }

  getCategorias() {
    return this.Http.get<any>('assets/data/category.json')
      .toPromise()
      .then(res => <Category[]>res.data)
      .then(data => data);
  }
}
