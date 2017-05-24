import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnsComponent } from "./dns/dns.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'dns', component: DnsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
