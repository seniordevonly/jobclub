import { LoggedinDirective } from './loggedin.directive';

xdescribe('LoggedinDirective', () => {
  it('should create an instance', () => {
    const directive = new LoggedinDirective(null, null, null, null);
    expect(directive).toBeTruthy();
  });
});
