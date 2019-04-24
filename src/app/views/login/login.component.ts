import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent { 

  constructor(private router: Router) { }

  doLogin() {
    console.log('AQUI');
    this.router.navigate(['/dashboard'])
  }
}
