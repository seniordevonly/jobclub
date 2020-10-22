import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZoomComponent} from './zoom/zoom.component';
import {AppComponent} from './app.component';
import {WherebyComponent} from './whereby/whereby.component';

const routes: Routes = [
  { path: '', component: ZoomComponent },
  { path: 'whereby', component: WherebyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
