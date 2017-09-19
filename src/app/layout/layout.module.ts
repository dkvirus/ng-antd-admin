import { NgModule } from '@angular/core';
import { 	CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SecurityUserComponent } from '../security-user/security-user.component';
import { SecurityRoleComponent } from '../security-role/security-role.component';
import { SecurityOrgComponent } from '../security-org/security-org.component';
import { SecurityFuncComponent } from '../security-func/security-func.component';
import { GaodemapComponent } from '../gaodemap/gaodemap.component';
import { AmapComponent } from '../gaodemap/amap/amap.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SecurityUserComponent,
    GaodemapComponent,
    AmapComponent,
    NotFoundComponent,
    SecurityRoleComponent,
    SecurityOrgComponent,
    SecurityFuncComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: []
})
export class LayoutModule { }
