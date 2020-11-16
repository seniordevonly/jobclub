import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';
import {environment} from '../../environments/environment';

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
  isTeacherRole: boolean;
  profileName: string;
  profileAge: string;

  private static profileUrl(): string {
    return environment.services.baseUrl + '/profile';
  }

  ngOnInit(): void {
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
    this.isTeacherRole = this.keycloakService.isUserInRole('teacher');

    this.httpClient.get(ProfileComponent.profileUrl()).toPromise().then((data: any) => {
      console.log('profile data:', data);
      this.profileName = data.name;
      this.profileAge = data.age;
    }).catch((error) => {
      console.log(error);
    });
  }

}
