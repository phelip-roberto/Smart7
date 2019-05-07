import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { App } from './../domain/app';

@Injectable({
  providedIn: 'root'
})
export class AppsManagerService {

  constructor(private Http: HttpClient) { }

  getApps() {
    return this.Http.get<any>('assets/data/apps.json')
      .toPromise()
      .then(res => <App[]>res.data)
      .then(data => data);
  }
}
