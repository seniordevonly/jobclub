import { Component, OnInit } from '@angular/core';
import {MeetingService} from '../shared/services/remote-api/meeting.service';
import {Meeting} from '../shared/models/meeting.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
// import moment = require('moment');
// import { Moment } from 'moment';
import * as moment from 'moment';
import {KeycloakService} from 'keycloak-angular';
import {Observable} from 'rxjs';

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
  // joinedMeetingAsUser: Meeting;
  meetings: Meeting[];
  iframeSrc: SafeResourceUrl;

  isUserRole: boolean;
  isTeacherRole: boolean;
  mainRole: string;

  private static buildRoomUrl(roomUrl: string): string {
    return roomUrl + '?embed&leaveButton=off&people=off';
  }

  ngOnInit(): void {

    this.isUserRole = this.keycloakService.isUserInRole('user');
    this.isTeacherRole = this.keycloakService.isUserInRole('teacher');

    if (this.isTeacherRole) {
      this.mainRole = 'Teacher';
    } else {
      this.mainRole = 'User';
    }

    this.loadMeetings();
  }

  loadMeetings(): void {
    if (this.isTeacherRole) {
      this.meetingService.getWherebyMeetingsForTeacher().subscribe((data: Meeting[]) => {
        this.meetings = data;
      });
    } else if (this.isUserRole) {
      this.meetingService.getWherebyMeetingsForUser().subscribe((data: Meeting[]) => {
        this.meetings = data;
      });
    }
  }

  isMeetingActive(meeting: Meeting): boolean {
    console.log('isMeetingActive meeting ', meeting);
    console.log('isMeetingActive this.meeting ', this.meeting);
    return this.meeting !== undefined && this.meeting !== null && this.meeting.meetingId === meeting.meetingId;
  }

  isMeetingNotActive(meeting: Meeting): boolean {
    return !this.isMeetingActive(meeting);
  }

  private buildSafeResourceUrl(roomUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(WherebyComponent.buildRoomUrl(roomUrl));
  }

  private getMeeting(meetingId: number): void {
    /*this.meetingService.getWherebyMeeting(meetingId)
      .subscribe((data: Meeting) => this.meeting = data);*/

    this.meetingService.getWherebyMeeting(meetingId)
      .subscribe((data: Meeting) => {
        this.meeting = data;
        this.iframeSrc = this.buildSafeResourceUrl(data.roomUrl);
      });
  }

  public postMeeting(): void {
    const startDate = new Date();
    const endDate = new Date();
    this.meetingService.postWherebyMeeting(startDate, endDate).subscribe((data: Meeting) => {
      this.meeting = data;
      this.iframeSrc = this.iframeSrc = this.buildSafeResourceUrl(data.roomUrl);
      this.loadMeetings();
    });
  }

  public deleteMeeting(meeting: Meeting): void {
    this.meetingService.deleteWherebyMeetings(meeting.meetingId).subscribe(data => {
      console.log('Deleted: ', data);
      this.loadMeetings();
    });
  }

  public joinMeeting(meeting: Meeting): void {
    console.log('joinMeeting', meeting);
    this.meeting = meeting;
    this.iframeSrc = this.buildSafeResourceUrl(meeting.roomUrl);
  }

  public leaveMeeting(meeting: Meeting): void {
    console.log('leaveMeeting', meeting);
    this.meeting = null;
    this.iframeSrc = null;
  }

}
