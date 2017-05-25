import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class Md5Service {

  constructor(private _http: Http) { }

  hash(payload) {
    return this._http.get(`${environment.url}tools/md5/${payload}`)
      .map(res => res.json());
  }
}
