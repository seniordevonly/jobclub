import {Component, OnInit} from '@angular/core';
declare global {
  interface Window { typeformEmbed: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jobbstien';

  constructor() {
    console.log('AppComponent, constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent, onInit');
  }

}
