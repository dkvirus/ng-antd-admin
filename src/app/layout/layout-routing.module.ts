import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GaodemapComponent } from '../gaodemap/gaodemap.component';
import { SecurityUserComponent } from '../security-user/security-user.component';
import { SecurityRoleComponent } from '../security-role/security-role.component';
import { SecurityOrgComponent } from '../security-org/security-org.component';
import { SecurityFuncComponent } from '../security-func/security-func.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'gaodemap', component: GaodemapComponent },
    { path: 'security-user', component: SecurityUserComponent },
    { path: 'security-role', component: SecurityRoleComponent },
    { path: 'security-org', component: SecurityOrgComponent },
    { path: 'security-func', component: SecurityFuncComponent },
    { path: '**', component: NotFoundComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
