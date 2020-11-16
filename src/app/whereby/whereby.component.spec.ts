import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WherebyComponent } from './whereby.component';

xdescribe('WherebyComponent', () => {
  let component: WherebyComponent;
  let fixture: ComponentFixture<WherebyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WherebyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WherebyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
