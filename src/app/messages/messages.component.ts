import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Message {
  date: string;
  text: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  failed: boolean;
  messages: Array<Message> [];

  constructor(private http: HttpClient) {
    this.messages = [];
  }

  ngOnInit(): void {

  }

}
