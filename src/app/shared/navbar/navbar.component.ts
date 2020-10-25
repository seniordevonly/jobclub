import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {environment} from '../../../environments/environment';
import {Keycloak} from 'keycloak-angular/lib/core/services/keycloak.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }

  login(): void {
    class LoginOptions implements Keycloak.KeycloakLoginOptions {
      redirectUri = environment.keycloak.loginRedirectLink;
      action = 'login';
      locale = 'no';
    }

    this.keycloakService.login(new LoginOptions());
  }

  register(): void {
    class LoginOptions implements Keycloak.KeycloakLoginOptions {
      redirectUri = environment.keycloak.registerRedirectLink;
      action = 'register';
    }

    this.keycloakService.login(new LoginOptions());
  }

  logout(): void {
    this.keycloakService.logout(environment.keycloak.logoutRedirectLink);
  }
}
