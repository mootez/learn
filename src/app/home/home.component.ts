import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lat = 43.6384725;
  lng = 1.4391506;
  // modalRef?: BsModalRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(): void {
    this.router.navigate(['contact']);
  }
}
