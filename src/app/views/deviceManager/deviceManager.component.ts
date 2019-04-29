import { Component } from '@angular/core';
import { Router } from '@angular/router';

const CATEGORIAS = [
  { id: 1, name: 'Teste1' },
  { id: 2, name: 'Teste2' },
  { id: 3, name: 'Teste3' },
  { id: 4, name: 'Teste4' },
  { id: 5, name: 'Teste5' },
  { id: 6, name: 'Teste6' },
  { id: 7, name: 'Teste7' },
  { id: 8, name: 'Teste8' },
  { id: 9, name: 'Teste9' },
  { id: 10, name: 'Teste10' },
];

const EMPRESAS = [
  { id: 1, name: 'Teste1' },
  { id: 2, name: 'Teste2' },
  { id: 3, name: 'Teste3' },
  { id: 4, name: 'Teste4' },
  { id: 5, name: 'Teste5' },
  { id: 6, name: 'Teste6' },
  { id: 7, name: 'Teste7' },
  { id: 8, name: 'Teste8' },
  { id: 9, name: 'Teste9' },
  { id: 10, name: 'Teste10' },
];

const PERIFERICOS = [
  { id: 1, name: 'Wi-Fi', value: true },
  { id: 2, name: 'Bluetooth', value: true },
  { id: 3, name: 'GPRS/3G/4G', value: false },
  { id: 4, name: 'Câmera', value: true },
  { id: 5, name: 'Leito Biométrico', value: true },
];

const ACOES = [
  { id: 1, name: 'Bloqueio de Chamadas de Voz', value: true },
  { id: 2, name: 'Acesso à Barra de Configurações/Notificações', value: true },
  { id: 3, name: 'Personalização Tela de Fundo', value: false },
  { id: 4, name: 'Atualização Automática', value: true },
  { id: 5, name: 'Atualização Somente com Wi-Fi', value: true },
];

@Component({
  templateUrl: 'deviceManager.component.html',
  styleUrls: ['deviceManager.component.scss']
})
export class DeviceManagerComponent {
  
  
  constructor() { }

  categorias = CATEGORIAS;

  empresas = EMPRESAS;

  perifericos = PERIFERICOS;

  acoes = ACOES;
}
