import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent { 

  recoverPass: boolean = false;

  constructor(private router: Router) { }

  doLogin() {
    this.router.navigate(['/dashboard'])
  }

  sendRecover() {
    alert("E-mail de recuperação de senha enviado");
    this.recoverPass = !this.recoverPass;
  }
}
