import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DnsComponent } from './dns/dns.component';
import { ApiService } from './api.service';
import { Md5Component } from './md5/md5.component';
import { Md5Service } from './md5.service';
import { Sha1Component } from './sha1/sha1.component';
import { Sha1Service } from './sha1.service';
import { IpComponent } from './ip/ip.component';
import { IpService } from './ip.service';

@NgModule({
  declarations: [
    AppComponent,
    DnsComponent,
    Md5Component,
    Sha1Component,
    IpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, Md5Service, Sha1Service, IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
