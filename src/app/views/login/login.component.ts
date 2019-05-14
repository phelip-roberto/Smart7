import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './../../domain/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {

  msgs: Message[] = [];
  recoverPass = false;

  constructor(private router: Router) { }

  doLogin() {
    this.router.navigate(['/dashboard']);
  }

  sendRecover() {
    this.msgs.push({severity: 'success', summary: 'Recuperação de Senha',
      detail: 'Um e-mail foi enviado para que você possa recuperar sua senha!'});
    this.recoverPass = !this.recoverPass;
  }
}
