import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnsComponent } from "./dns/dns.component";
import { Md5Component } from "./md5/md5.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'dns', component: DnsComponent },
  { path: 'md5', component: Md5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
