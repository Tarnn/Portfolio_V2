import { Component, OnInit } from '@angular/core';

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

}
