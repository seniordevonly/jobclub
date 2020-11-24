import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeform.component.scss']
})
export class TypeformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ronk();
  }

  private ronk(): void {
    window.addEventListener("DOMContentLoaded", function() {
      alert('window.addEventListener');
      var el = document.getElementById("my-embedded-typeform");

      // When instantiating a widget embed, you must provide the DOM element
      // that will contain your typeform, the URL of your typeform, and your
      // desired embed settings
      window.typeformEmbed.makeWidget(el, "https://thomasvervik284714.typeform.com/to/dJtzA1nh", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    });
  }

}
