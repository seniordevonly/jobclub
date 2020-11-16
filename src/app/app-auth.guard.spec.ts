import { TestBed } from '@angular/core/testing';

import { AppAuthGuard } from './app-auth.guard';

xdescribe('AppAuthGuard', () => {
  let guard: AppAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
