import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // Variáveis preenchidas de forma estática, que após a integração serão preenchidas com a resposta da requisição
  accessLevel: string;
  user: string;
  login: string;
  lastAccess: string;
  version: string;

  constructor() {
    this.accessLevel = 'Administrativo';
    this.user = 'User Test';
    this.login = 'Login Test';
    this.lastAccess = '10/04/2019 10:44:42';
    this.version = 'Version Test';
  }
  ngOnInit(): void { }
}
