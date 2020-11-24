import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeform.component.scss']
})
export class TypeformComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addTypeForm();
  }

  private addTypeForm(): void {
    const el = document.getElementById('my-embedded-typeform');

    window.typeformEmbed.makeWidget(el, 'https://thomasvervik284714.typeform.com/to/dJtzA1nh', {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0
    });
  }
}
