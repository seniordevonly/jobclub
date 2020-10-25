import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http403Component } from './http403.component';

describe('Http403Component', () => {
  let component: Http403Component;
  let fixture: ComponentFixture<Http403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Http403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Http403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
