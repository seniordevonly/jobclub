import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';
import {environment} from '../../environments/environment';

interface Profile {
  name: string;
  age: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userDetails: KeycloakProfile;
  isUserRole: boolean;
  isAdminRole: boolean;
  profileName: string;
  profileAge: string;

  constructor(public httpClient: HttpClient, public keycloakService: KeycloakService) {

  }

  ngOnInit(): void {
    // const userClaims = await this.oktaAuth.getUser();
    // this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
    this.getProfileInfo();
  }

  async getProfileInfo(): Promise<void> {
    this.keycloakService.isLoggedIn().then(e => {
      console.log('isLoggedIn: ', e);
    });

    this.keycloakService.getToken().then(e => {
      console.log('getToken: ', e);
    });

    const roles = this.keycloakService.getUserRoles(true);
    console.log('roles', roles);
    // this.username = this.keycloakService.getUsername();

    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
    this.isUserRole = this.keycloakService.isUserInRole('user');
    this.isAdminRole = this.keycloakService.isUserInRole('admin');
    console.log('isUserRole', this.isUserRole);
    console.log('isAdminRole', this.isAdminRole);
    console.log('userDetails', this.userDetails);

    this.httpClient.get(environment.meetingService.profileUrl).toPromise().then((data: any) => {
      console.log('profile data:', data);
      this.profileName = data.name;
      this.profileAge = data.age;
    }).catch((error) => {
      console.log(error);
    });
  }

}
