import { Subscription } from 'rxjs/internal/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { RESUME_ROUTE } from './../../app.constants';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInOnEnterAnimation, fadeInDownOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeInDownOnEnterAnimation()
  ]
})
export class NavbarComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  isNavbarCollapsed = true;
  
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  goToResumePage(): void {
    this.router.navigate([RESUME_ROUTE]);
  }

  anchorClick(): void {
   this.routeSubscription = this.route.fragment.subscribe(f => {
      const element = document.querySelector ( "#" + f )
      if (element) element.scrollIntoView(true);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
