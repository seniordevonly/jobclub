import {OktaAuthGuard, OktaAuthModule, OktaCallbackComponent} from '@okta/okta-angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZoomComponent} from './zoom/zoom.component';
import {WherebyComponent} from './whereby/whereby.component';
import {AdminComponent} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'zoom', pathMatch: 'full' },
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
