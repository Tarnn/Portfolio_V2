import { Router } from '@angular/router';
import { RESUME_LINK, RESUME_ROUTE } from './../../app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToResumePage(): void {
    this.router.navigate([RESUME_ROUTE]);
  }

}
