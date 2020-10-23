import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';

interface ResourceServerExample {
  label: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resourceServerExamples: Array<ResourceServerExample>;
  userName: string;
  isAuthenticated: boolean;
  error: Error;

  constructor(public oktaAuth: OktaAuthService) {
    this.resourceServerExamples = [
      {
        label: 'Node/Express Resource Server Example',
        url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
      },
      {
        label: 'Java/Spring MVC Resource Server Example',
        url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
      },
    ];
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async login(): Promise<void> {
    try {
      await this.oktaAuth.loginRedirect();
    } catch (err) {
      console.error(err);
      this.error = err;
    }
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.userName = userClaims.name;
    }
  }

}
