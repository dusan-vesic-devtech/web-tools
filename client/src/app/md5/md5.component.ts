import { Component, OnInit } from '@angular/core';
import { Md5Service } from "../md5.service";

@Component({
  selector: 'app-md5',
  template: `
    <div class="row">
      <div class="col s12">
        <div class="card purple darken-4">
          <div class="card-content white-text">
            <span class="card-title">MD5 Generator</span>
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
            {{hashed || 'md5 here'}}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Md5Component implements OnInit {
  hashed: string = '';

  constructor(private _md5: Md5Service) { }

  ngOnInit() {
  }

  hash(load) {
    this._md5.hash(load.value)
      .subscribe(res => {
        this.hashed = res.md5;
        load.value = '';
      })
  }
}
