import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  lat = 43.6384725;
  lng = 1.4391506;
  emailstring: string;
  submitted = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['service31clean@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

   // convenience getter for easy access to form fields
   get f(): any { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    this.emailstring =
      'mailto:' +
      this.contactForm.value.email +
      '?Subject=' +
      this.contactForm.value.subject +
      '&body=' +
      this.contactForm.value.name + '-' + this.contactForm.value.message;
    const anchor = document.createElement('a');
    anchor.href = this.emailstring;
    anchor.click();
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
}
