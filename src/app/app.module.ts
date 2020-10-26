import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './shared/input/input.component';
import { ValidationComponent } from './shared/validation/validation.component';
import { WherebyComponent } from './whereby/whereby.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {KeycloakAngularModule, KeycloakOptions, KeycloakService} from 'keycloak-angular';
import { Http403Component } from './shared/http403/http403.component';
import { PermissionDirective } from './directive/permission/permission.directive';
import { LoggedinDirective } from './directive/loggedin/loggedin.directive';
import {environment} from '../environments/environment';

/*export function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: environment.keycloak.authLink,
            realm: environment.keycloak.realm,
            clientId: environment.keycloak.clientId
          },
          bearerExcludedUrls: ['/assets', '/clients/public'],
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html',
          },
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}*/

/*function initializeKeycloak(keycloak: KeycloakService): any {
  const options: KeycloakOptions = {
    config: {
      url: 'http://localhost:8180/auth',
      realm: 'jobbstien',
      clientId: 'client-app'
    },
    bearerExcludedUrls: ['/assets', '/clients/public'],
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
    },
  };

  return () => keycloak.init(options);
}*/

// tslint:disable-next-line:typedef
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.authLink,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId
      },
      bearerExcludedUrls: ['/assets', '/clients/public'],
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

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
    Http403Component,
    PermissionDirective,
    LoggedinDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
