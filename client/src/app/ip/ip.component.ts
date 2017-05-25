import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';

@Component({
  selector: 'app-ip',
  template: `
    <div class="row">
      <div class="col s12">
        <div class="card teal darken-4">
          <div class="card-content white-text">
            <span class="card-title">Your IP:</span>
            <h1>{{ip}}</h1>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class IpComponent implements OnInit {
  ip: string = '';

  constructor(private _ipService: IpService) { }

  ngOnInit() {
    this._ipService.getIp()
      .subscribe(res => this.ip = res.ip);
  }

}
