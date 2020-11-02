import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Meeting} from '../../models/meeting.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(public httpClient: HttpClient) { }

  private static wherebyUrlForId(id): string {
      return environment.services.meeting.baseUrl + '/whereby/' + id;
  }

  private static wherebyUrl(): string {
    return environment.services.meeting.baseUrl + '/whereby';
  }

  private static formatDate(date: Date): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

  public getWherebyMeeting(id): Observable<Meeting> {
    return this.httpClient.get<Meeting>(MeetingService.wherebyUrlForId(id));
  }

  public getWherebyMeetings(): Observable<Meeting[]> {
    return this.httpClient.get<Meeting[]>(MeetingService.wherebyUrl());
  }

  public postWherebyMeeting(start: Date, end: Date): Observable<any> {

    const body = {
      startDate: MeetingService.formatDate(start),
      endDate: MeetingService.formatDate(end)
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
