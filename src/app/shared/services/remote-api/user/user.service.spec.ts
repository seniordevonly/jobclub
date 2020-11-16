import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../../../environments/environment';

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
     httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get teachers 200', () => {
    const dummyTeachers = [
      { teacherId: '2555f11f-abf7-4470-a924-1be9e7fbc095', firstName: 'Thomas', lastName: 'Vervik', email: 'thomas@vervik.no' },
      { teacherId: 'b7fc7c66-a55f-4c80-85a7-e44c13adccb6', firstName: 'Donakd', lastName: 'Duck', email: 'donald@duck.com' }
    ];

    service.getTeachers().subscribe(teachers => {
      expect(teachers.length).toBe(2);
      expect(teachers).toEqual(dummyTeachers);
    });

    const req = httpMock.expectOne(environment.services.baseUrl + '/teachers');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTeachers);
  });

  it('should get teachers 404', () => {
    const http404 =
      {
        title: 'Teacher not found',
        status: 404,
        detail: 'Teacher with username \'thomas@ronk.com\' not found'
      };

    service.getTeachers()
      .subscribe(() => {}, err => {
        console.log('err.error', err.error);
        expect(err.error).toEqual(http404);
        // expect(err).toEqual(http404);
      });

    const req = httpMock.expectOne(environment.services.baseUrl + '/teachers');
    expect(req.request.method).toBe('GET');
    req.flush(http404, {status: 404, statusText: 'Not Found'});
  });
});
