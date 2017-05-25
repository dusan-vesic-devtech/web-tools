import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class Sha1Service {

  constructor(private _http: Http) { }

  hash(payload) {
    return this._http.get(`${environment.url}tools/sha1/${payload}`)
      .map(res => res.json());
  }
}
