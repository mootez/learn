import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  navBarTogglerIsVisible(): any {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav(): void {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

}
