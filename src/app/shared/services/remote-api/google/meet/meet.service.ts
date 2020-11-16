import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../environments/environment';
import {Teacher} from '../../../../models/user/teacher/teacher.model';
import {Meeting} from '../../../../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  constructor(public httpClient: HttpClient) { }

  public postGoogleMeeting(teacher: Teacher): Observable<any> {
    const body = {
      teacherId: teacher.teacherId
      // startDate: MeetingService.formatDate(start),
      // endDate: MeetingService.formatDate(end)
    };
    return this.httpClient.post(environment.services.baseUrl + '/google-meet', body);
  }

  public getGoogleMeetings(): Observable<Meeting[]> {
    return this.httpClient.get<Meeting[]>(environment.services.baseUrl + '/google-meet/list');
  }

}
