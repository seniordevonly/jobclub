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

  constructor(public httpClient: HttpClient, public keycloakService: KeycloakService) {

  }

  userDetails: KeycloakProfile;
  isUserRole: boolean;
  isAdminRole: boolean;
  profileName: string;
  profileAge: string;

  private static profileUrl(): string {
    return environment.services.meeting.baseUrl + '/profile';
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

    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
    this.isUserRole = this.keycloakService.isUserInRole('user');
    this.isAdminRole = this.keycloakService.isUserInRole('admin');

    this.httpClient.get(ProfileComponent.profileUrl()).toPromise().then((data: any) => {
      console.log('profile data:', data);
      this.profileName = data.name;
      this.profileAge = data.age;
    }).catch((error) => {
      console.log(error);
    });
  }

}
