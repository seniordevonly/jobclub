import {OktaAuthGuard, OktaAuthModule, OktaCallbackComponent} from '@okta/okta-angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZoomComponent} from './zoom/zoom.component';
import {WherebyComponent} from './whereby/whereby.component';
import {AdminComponent} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
  { path: 'zoom', component: ZoomComponent },
  { path: 'whereby', component: WherebyComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [ OktaAuthGuard ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OktaAuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
