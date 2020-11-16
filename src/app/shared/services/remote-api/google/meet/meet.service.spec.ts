import { TestBed } from '@angular/core/testing';

import { MeetService } from './meet.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('MeetService', () => {
  let service: MeetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
