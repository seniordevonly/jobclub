import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetComponent } from './meet.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';

// https://angular.io/guide/testing-components-scenarios
describe('MeetComponent', () => {
  let component: MeetComponent;
  let fixture: ComponentFixture<MeetComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MeetComponent ]
    })
    .compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load teachers', () => {

    const dummyTeachers = [
      { teacherId: '2555f11f-abf7-4470-a924-1be9e7fbc095', firstName: 'Thomas', lastName: 'Vervik', email: 'thomas@vervik.no' },
      { teacherId: 'b7fc7c66-a55f-4c80-85a7-e44c13adccb6', firstName: 'Donald', lastName: 'Duck', email: 'donald@duck.com' }
    ];

    const req = httpMock.expectOne(environment.services.baseUrl + '/teachers');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTeachers);

    expect(component).toBeTruthy();
    expect(component.teachers).toBe(dummyTeachers);
    expect(component.teachers.length).toBe(2);

    fixture.detectChanges();

    const bannerElement: HTMLElement = fixture.nativeElement;
    const textContent = bannerElement.textContent;
    console.log('textContent', textContent);
    expect(textContent).toContain('Donald');
    // const table = bannerElement.querySelector('table');
    // expect(table.textContent).toContain('Donald');
  });
});
