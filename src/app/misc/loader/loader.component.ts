import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class LoaderComponent implements OnInit {
  @ViewChild('path2') pathTwo: ElementRef;
  @Input('isLoading') isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log("Path2:", this.pathTwo.nativeElement);
  }
}
