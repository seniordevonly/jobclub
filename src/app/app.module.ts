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

const oktaConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: 'your clientId',
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    ZoomComponent,
    InputComponent,
    ValidationComponent,
    WherebyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
