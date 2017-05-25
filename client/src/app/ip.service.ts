import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class IpService {

  constructor(private _http: Http) { }

  getIp() {
    return this._http.get(`${environment.url}tools/ip`)
      .map(res => res.json());
  }

}
