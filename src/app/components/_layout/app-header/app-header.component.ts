import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  showNavbar = false;
  @Output() isShowNavbar = new EventEmitter<boolean>();
  @Input() navbar: AppNavbarComponent;

  constructor() { }

  ngOnInit() {
  }

  onShowHideNavbar(): void {
    this.showNavbar = false;
    this.isShowNavbar.emit(this.showNavbar);
    this.navbar.showLogo = !this.navbar.showLogo;
  }

}
