import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-group',
  templateUrl: './terminal-group.component.html',
  styleUrls: ['./terminal-group.component.scss']
})
export class TerminalGroupComponent implements OnInit {

  group: any = {
    name: '',
    description: '',
    patternGroup: true
  };

  constructor() { }

  ngOnInit() {
  }

}
