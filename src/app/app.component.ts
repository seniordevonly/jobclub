import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';

import { ZoomMtg } from '@zoomus/websdk';

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jobb klubb';

  constructor(private fb: FormBuilder, public httpClient: HttpClient, @Inject(DOCUMENT) document) { }

  zoomForm = this.fb.group( {
    meetingNumber: [''],
    passWord: [''],
    role: [''],
    username: [''],
    userEmail: ['']
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmit');
    // this.getSignature();
  }

  getSignature(): void {
    this.httpClient.post(environment.signatureEndpoint, {
      meetingNumber: this.zoomForm.value.meetingNumber,
      role: this.zoomForm.value.role
    }).toPromise().then((data: any) => {
      if (data.signature) {
        console.log(data.signature);
        this.startMeeting(data.signature);
      } else {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  startMeeting(signature): void {

    document.getElementById('zmmtg-root').style.display = 'block';

    ZoomMtg.init({
      leaveUrl: environment.leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature,
          meetingNumber: this.zoomForm.value.meetingNumber,
          userName: this.zoomForm.value.userName,
          apiKey: environment.apiKey,
          userEmail: this.zoomForm.value.userEmail,
          passWord: this.zoomForm.value.passWord,
          // tslint:disable-next-line:no-shadowed-variable
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          }
        });

      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
