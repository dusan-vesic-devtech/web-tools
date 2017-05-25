import { Component, OnInit } from '@angular/core';
import { Sha1Service } from "../sha1.service";

@Component({
  selector: 'app-md5',
  template: `
    <div class="row">
      <div class="col s12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">SHA1 Generator</span>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="textarea1" #load class="materialize-textarea" placeholder="type here..."></textarea>
              </div>
            </div>
          </div>
          <div class="card-action">
            <button class="btn waves-effect waves-light" href="#" (click)="hash(load)">Generate</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card-panel teal">
          <span class="white-text">
            {{hashed || 'sha1 here'}}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Sha1Component implements OnInit {
  hashed: string = '';

  constructor(private _sha1: Sha1Service) { }

  ngOnInit() {
  }

  hash(load) {
    this._sha1.hash(load.value)
      .subscribe(res => {
        this.hashed = res.sha1;
        load.value = '';
      })
  }
}
