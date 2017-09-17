import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityOrgComponent } from './security-org/security-org.component';
import { SecurityUserComponent } from './security-user/security-user.component';
import { SecurityRoleComponent } from './security-role/security-role.component';
import { SecurityFuncComponent } from './security-func/security-func.component';
import { GaodemapComponent } from './gaodemap/gaodemap.component';
import { AmapComponent } from './gaodemap/amap/amap.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'security-org', component: SecurityOrgComponent},
  { path: 'security-user', component: SecurityUserComponent},
  { path: 'security-role', component: SecurityRoleComponent},
  { path: 'security-func', component: SecurityFuncComponent},
  { path: 'gaodemap', component: GaodemapComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SecurityOrgComponent,
    SecurityUserComponent,
    SecurityRoleComponent,
    SecurityFuncComponent,
    GaodemapComponent,
    AmapComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
