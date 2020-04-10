import { Component, OnInit } from '@angular/core';
import { MAIL_LINK } from 'src/app/app.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      // do stuff here
    }
  }
  
  mail(): void {
    window.location.href = MAIL_LINK;
  }
  
}
