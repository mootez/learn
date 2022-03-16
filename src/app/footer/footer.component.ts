import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  annee: any;
  constructor(private router: Router) {
    this.annee = new Date().getFullYear();

  }
  ngOnInit(): void {}

  goToItineraire(): void {
    window.open(
      'https://www.google.com/maps/place/145+Rte+de+Launaguet,+31200+Toulouse/@43.63863,1.4366876,17z/data=!3m1!4b1!4m5!3m4!1s0x12aea4a60614c8bb:0xd15821ba9d31714a!8m2!3d43.63863!4d1.4388763',
      '_blank'
    );
  }

  appeler(): void {
    window.open('tel:0670431503');
  }
}
