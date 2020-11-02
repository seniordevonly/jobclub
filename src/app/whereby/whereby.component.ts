import { Component, OnInit } from '@angular/core';
import {MeetingService} from '../shared/services/remote-api/meeting.service';
import {Meeting} from '../shared/models/meeting.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
// import moment = require('moment');
// import { Moment } from 'moment';
import * as moment from 'moment';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-whereby',
  templateUrl: './whereby.component.html',
  styleUrls: ['./whereby.component.scss']
})
export class WherebyComponent implements OnInit {

  constructor(
    private meetingService: MeetingService,
    private sanitizer: DomSanitizer,
    private keycloakService: KeycloakService) { }

  meeting: Meeting;
  meetings: Meeting[];
  iframeSrc: SafeResourceUrl;

  ngOnInit(): void {
    this.meetingService.getWherebyMeetings().subscribe((data: Meeting[]) => {
      console.log('data', data);
      this.meetings = data;
      // this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.roomUrl);
    });
  }

  private getMeeting(meetingId: number): void {
    /*this.meetingService.getWherebyMeeting(meetingId)
      .subscribe((data: Meeting) => this.meeting = data);*/

    this.meetingService.getWherebyMeeting(meetingId)
      .subscribe((data: Meeting) => {
        this.meeting = data;
        this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.roomUrl);
      });

    /*
this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile:  data.textfile
    });
     */
  }

  public postMeeting(): void {
    const startDate = new Date();
    const endDate = new Date();
    this.meetingService.postWherebyMeeting(startDate, endDate).subscribe((data: Meeting) => {
      this.meeting = data;
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.roomUrl);
    });
  }

}
