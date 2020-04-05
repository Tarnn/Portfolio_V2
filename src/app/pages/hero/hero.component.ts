import { Component, OnInit } from '@angular/core';

declare var Particles: any;
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

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

}
