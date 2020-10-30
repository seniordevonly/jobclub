import { Component, OnInit } from '@angular/core';
import {MeetingService} from '../shared/services/remote-api/meeting.service';
import {Meeting} from '../shared/models/meeting.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-whereby',
  templateUrl: './whereby.component.html',
  styleUrls: ['./whereby.component.scss']
})
export class WherebyComponent implements OnInit {

  constructor(private meetingService: MeetingService, private sanitizer: DomSanitizer) { }

  meeting: Meeting;
  iframeSrc: SafeResourceUrl;

  ngOnInit(): void {
    // this.getMeeting(15868186);
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
    this.meetingService.postWherebyMeeting().subscribe((data: Meeting) => {
      this.meeting = data;
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data.roomUrl);
    });
  }

}
