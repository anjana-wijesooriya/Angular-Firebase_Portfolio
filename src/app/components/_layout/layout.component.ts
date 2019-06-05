import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, RouterOutlet } from '@angular/router';
import { slideInAnimation, RouterTransition } from 'src/app/app.router.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations:[slideInAnimation, RouterTransition]
})
export class LayoutComponent implements OnInit {
  isShowNav: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }

      this.onHideNavbar(true);
    });
   }

  ngOnInit() {
  }

  onShowNavbar(isShow: boolean): void {
    this.isShowNav = isShow;
  }

  onHideNavbar(isShow: boolean): void {
    this.isShowNav = isShow;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
