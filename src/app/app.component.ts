import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { APP_ROUTE_STYLEGUIDE } from './app.constants';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "[class.styleguide-bg]":"styleGuide" 
  }, 
})
export class AppComponent implements OnInit, OnDestroy{
  routerSubscription: Subscription;
  styleGuide: boolean = false;
  isLoading: boolean = true;

  constructor(private router: Router) {
    console.log("Loaded: ", new Date().getTime().toLocaleString())
   }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 2400);

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case APP_ROUTE_STYLEGUIDE:
            this.styleGuide = true;
            break;
          default:
            this.styleGuide = false;
            break;
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
