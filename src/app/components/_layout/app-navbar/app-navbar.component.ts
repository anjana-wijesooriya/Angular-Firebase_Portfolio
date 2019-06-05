import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
// import "../../../images/logo.png"

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  showLogo = true;
  @Output() isShowNavbar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onHideNavbar(): void {
    this.showLogo = !this.showLogo;
    this.isShowNavbar.emit(this.showLogo);
  }

}
