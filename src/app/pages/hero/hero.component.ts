import { MAIL_LINK, HERO_SUBTEXT_STRINGS } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

declare var Particles: any;
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class HeroComponent implements OnInit {
  heroText: string[] = HERO_SUBTEXT_STRINGS;

  constructor() { }

  ngOnInit(): void {
    Particles.init({
      selector: '.background',
      maxParticles: 450,
      color: '#CCD6F6',
      responsive: [{
        breakpoint: 800,
        options: {
          maxParticles: 80,
        }
      }]
    });
  }

  mail(): void {
    window.location.href = MAIL_LINK;
  }

}
