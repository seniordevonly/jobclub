import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Directive({
  selector: '[appIsLoggedIn]'
})
export class LoggedinDirective implements OnInit {

  @Input('appIsLoggedIn')
  isLoggedIn: boolean;

  constructor(
    private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn === this.isLoggedIn) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
