import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'deviceManager.component.html'
})
export class DeviceManagerComponent implements OnInit {
  
  tab1: boolean = true;
  tab2: boolean = false;
  tab3: boolean = false;
  tab4: boolean = false;
  

  constructor() {  }
  ngOnInit(): void { }
}
