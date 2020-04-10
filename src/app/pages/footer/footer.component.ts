import { Component, OnInit } from '@angular/core';
import { ANGULAR_IO } from './../../app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToAngular(): void {
    window.location.href = ANGULAR_IO;
  }

}
