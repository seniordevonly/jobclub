import {Component, Inject, OnInit} from '@angular/core';

import {environment} from '../../environments/environment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  constructor(private fb: FormBuilder, public httpClient: HttpClient, @Inject(DOCUMENT) document) { }

  zoomForm: any;

  ngOnInit(): void {
    this.zoomForm = this.fb.group( {
      meetingNumber:  ['94699732528', [Validators.required, Validators.min(1000)]],
      password: ['9bfFVg', Validators.required],
      role: ['0'],
      userName: ['Job Club Thomas'],
      userEmail: ['thomas.vervik@gmail.com']
    });
  }

  get meetingNumber(): FormControl{
    return this.zoomForm.get('meetingNumber');
  }

  get password(): FormControl {
    return this.zoomForm.get('password');
  }

  onSubmit(): void {
    console.log('onSubmit', this.zoomForm.value);
    console.log('valid', this.zoomForm.valid);

    console.log('meetingNumber', this.zoomForm.value.meetingNumber);
    console.log('password', this.zoomForm.value.password);
    console.log('role', this.zoomForm.value.role);
    // stop here if form is invalid
    if (this.zoomForm.invalid) {
      this.zoomForm.markAllAsTouched();
      // this.meetingNumber.markAsDirty();
      console.log('zoomForm not valid, ronk');
      return;
    }
    this.getSignature();
  }

  getSignature(): void {
    this.httpClient.post(environment.signatureEndpoint, {
      meetingNumber: this.zoomForm.value.meetingNumber,
      role: this.zoomForm.value.role
    }).toPromise().then((data: any) => {
      if (data.signature) {
        console.log('signature', data.signature);
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
    console.log('password.value', this.password.value);

    ZoomMtg.init({
      leaveUrl: environment.leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log('Yeah, init success', success);

        ZoomMtg.join({
          signature,
          meetingNumber: this.meetingNumber.value,
          userName: this.zoomForm.value.userName,
          apiKey: environment.apiKey,
          userEmail: this.zoomForm.value.userEmail,
          passWord: this.password.value,
          // tslint:disable-next-line:no-shadowed-variable
          success: (success) => {
            console.log('success', success);
          },
          error: (error) => {
            console.error('error', error);
          }
        });

      },
      error: (error) => {
        console.log('ufda, error', error);
      }
    });
  }

}
