import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ForcolComponent } from './views/forcol/forcol.component';
import { SupplyComponent } from './views/supply/supply.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forcol', component: ForcolComponent, data: { title: 'Forcol' } },
  { path: 'supply', component: SupplyComponent, data: { title: 'Supply' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
