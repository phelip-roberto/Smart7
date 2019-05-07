import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './../../domain/message';
import { MessageService } from './../../service/service-message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {

  msgs: Message[] = [];
  recoverPass = false;

  constructor(private router: Router, private messageService: MessageService) { }

  doLogin() {
    this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Login Realizado'});
    this.router.navigate(['/dashboard']);
  }

  addSingle() {
    console.log('Teste');
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  sendRecover() {
    this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'E-mail de recuperação de senha enviado'});
    this.recoverPass = !this.recoverPass;
  }
}
