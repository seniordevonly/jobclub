import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/remote-api/user/user.service';
import {Teacher} from '../shared/models/user/teacher/teacher.model';
import {MeetService} from '../shared/services/remote-api/google/meet/meet.service';
import {Meeting} from '../shared/models/meeting.model';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {

  constructor(
    private userService: UserService,
    private meetService: MeetService
  ) { }

  teachers: Teacher[];
  meetings: Meeting[];
  event: any;

  ngOnInit(): void {
    this.userService.getTeachers().subscribe((data: Teacher[]) => {
      this.teachers = data;
    });
  }

  scheduleMeeting(teacher: Teacher): void {
    this.meetService.postGoogleMeeting(teacher).subscribe((data: any) => {
      this.event = data;
    }, errRes => {
      console.log('errRes', errRes);
    });
  }

  getMeetings(): void {
    this.meetService.getGoogleMeetings().subscribe((data: Meeting[]) => {
      this.meetings = data;
    });
  }

  joinMeeting(meeting: Meeting): void {
    console.log('joinMeeting', meeting);
    const win = window.open(meeting.roomUrl, '_blank');
    win.focus();
  }

  /*leaveMeeting(meeting: Meeting): void {
    console.log('leaveMeeting', meeting);
    this.meeting = null;
    this.iframeSrc = null;
  }*/
}
