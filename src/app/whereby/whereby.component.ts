import { Component, OnInit } from '@angular/core';
import {MeetingService} from '../shared/services/remote-api/meeting.service';
import {Meeting} from '../shared/models/meeting.model';

@Component({
  selector: 'app-whereby',
  templateUrl: './whereby.component.html',
  styleUrls: ['./whereby.component.scss']
})
export class WherebyComponent implements OnInit {

  constructor(private meetingService: MeetingService) { }

  meeting: Meeting;

  ngOnInit(): void {
    this.loadMeeting();
  }

  private loadMeeting(): void {
    this.meetingService.getWherebyMeeting(15868186)
      .subscribe((data: Meeting) => this.meeting = {
        startDate: data.startDate,
        endDate: data.endDate,
        roomUrl: data.roomUrl,
        meetingId: data.meetingId
      });

    /*
this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile:  data.textfile
    });
     */
  }

}
