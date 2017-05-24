import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dns',
  template: `
    <div class="row">
      <div class="card teal lighten-2">
        <div class="card-content white-text">
          <span class="card-title">domain name or IP address</span>
          <div class="row">
            <div class="input-field col s12">
              <input class="validate">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DnsComponent implements OnInit {

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.testApi();
  }

}
