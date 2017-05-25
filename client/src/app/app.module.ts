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

@NgModule({
  declarations: [
    AppComponent,
    DnsComponent,
    Md5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, Md5Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
