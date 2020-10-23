import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './shared/input/input.component';
import { ValidationComponent } from './shared/validation/validation.component';
import { WherebyComponent } from './whereby/whereby.component';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { OKTA_CONFIG } from '@okta/okta-angular';
import config from './app.config';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HeaderComponent} from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomComponent,
    InputComponent,
    ValidationComponent,
    WherebyComponent,
    AdminComponent,
    ProfileComponent,
    MessagesComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config.oidc },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
