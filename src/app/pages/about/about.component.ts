import { LINKEDIN_URL } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, bounceInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    bounceInRightOnEnterAnimation()
  ]
})
export class AboutComponent implements OnInit {
  animateSocialIcons: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      this.animateSocialIcons = true;
    }
  }

  navigateToLinkedIn(): void {
    window.location.href = LINKEDIN_URL;
  }

}
