import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnsComponent } from "./dns/dns.component";
import { Md5Component } from "./md5/md5.component";
import { Sha1Component } from "./sha1/sha1.component";
import { IpComponent } from "./ip/ip.component";

const routes: Routes = [
  {
    path: '',
    component: DnsComponent,
    children: []
  },
  { path: 'dns', component: DnsComponent},
  { path: 'md5', component: Md5Component },
  { path: 'sha1', component: Sha1Component },
  { path: 'ip', component: IpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
