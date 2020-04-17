import { Component, OnInit } from '@angular/core';
import { MAIL_LINK } from 'src/app/app.constants';
import { fadeInOnEnterAnimation, fadeInLeftOnEnterAnimation, jackInTheBoxOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeInLeftOnEnterAnimation(),
    jackInTheBoxOnEnterAnimation()
  ]
})
export class ContactComponent implements OnInit {
  animateContact: boolean = false;
  
  constructor() { }

  ngOnInit(): void { }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      console.log('Contact Activated')
      this.animateContact = true;
    }
  }
  
  mail(): void {
    window.location.href = MAIL_LINK;
  }
  
}
