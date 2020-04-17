import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeInLeftOnEnterAnimation()
  ]
})
export class ExperienceComponent implements OnInit {
  active = 'National Cash Register (NCR)';
  animateExperience = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      // do stuff here
      this.animateExperience = true;
    }
  }

}
