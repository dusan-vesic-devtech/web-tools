import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  testApi() {
    this._http.get('http://localhost:3000/time')
      .map(res => res.json())
      .subscribe(res => {
        console.log(res.time);
      })
  }
}
