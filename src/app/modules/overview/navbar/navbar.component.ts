import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openNavMenu() {
    this.open = !this.open;
  }

}
