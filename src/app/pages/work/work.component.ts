import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      // do stuff here for visibile elements
    }
  }
}
