import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

console.log(environment);

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  testApi() {
    this._http.get(`${environment.url}time`)
      .map(res => res.json())
      .subscribe(res => {
        console.log(res.time);
      })
  }

  getDnsTools (url) {
    return this._http.get(`${environment.url}tools/dns?url=${url}`)
      .map(res => res.json());
  }
}
