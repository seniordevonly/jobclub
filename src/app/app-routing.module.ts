import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZoomComponent} from './zoom/zoom.component';
import {WherebyComponent} from './whereby/whereby.component';
import {AdminComponent} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {AppAuthGuard} from './app-auth.guard';
import {Http403Component} from './shared/http403/http403.component';
import {MeetComponent} from './meet/meet.component';
import {TypeformComponent} from './typeform/typeform.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  // { path: '', redirectTo: 'zoom', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'zoom', component: ZoomComponent },
  { path: '403', component: Http403Component },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['user'] }
  },
  {
    path: 'whereby',
    component: WherebyComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['user'] }
  },
  {
    path: 'meet',
    component: MeetComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['user'] }
  },
  {
    path: 'typeform',
    component: TypeformComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
