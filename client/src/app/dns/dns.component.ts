import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dns',
  template: `
    <div class='wrap'>
      <div class="row">
        <div class="card teal lighten-2">
          <div class="card-content white-text">
            <span class="card-title">Domain name</span>
            <div class="row">
              <div class="input-field col s12">
                <input
                placeholder="type here..." 
                (ngModelChange)="onChange($event)"
                [(ngModel)]="name">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            {{dns | json}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .wrap {
      margin-top: 2em;
    }
  `]
})
export class DnsComponent implements OnInit {
  name: string = '';
  valid: boolean = false;
  regex: any = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  dns: any = {}

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.testApi();
  }

  onChange(e) {
    setTimeout(() => {
      if (this.regex.test(e)) {
        this._api.getDnsTools(e)
          .subscribe(res => {
            this.dns = res;
          })
      } else {
        console.log('Not a valid domain name');
      }
    }, 500);
  }
}
