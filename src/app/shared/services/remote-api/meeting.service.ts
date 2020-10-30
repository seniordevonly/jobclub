import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Meeting} from '../../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(public httpClient: HttpClient) { }

  private static wherebyUrl(id): string {
      return environment.services.meeting.baseUrl + '/whereby/' + id;
  }

  public getWherebyMeeting(id): Observable<Meeting> {
    return this.httpClient.get<Meeting>(MeetingService.wherebyUrl(id));
  }

  public postWherebyMeeting(): Observable<any> {

    const body = {
      startDate: new Date(),
      endDate: new Date()
    };
    return this.httpClient.post(environment.services.meeting.baseUrl + '/whereby', body);
    /* this.httpClient.post(MeetingService.wherebyUrl(), body).toPromise().then(meeting => {
      console.log()
    });

    this.httpClient.get(environment.services.meeting.baseUrl + '/').toPromise().then((data: any) => {
      console.log('profile data:', data);
      this.profileName = data.name;
      this.profileAge = data.age;
    }).catch((error) => {
      console.log(error);
    });*/

  }

}
