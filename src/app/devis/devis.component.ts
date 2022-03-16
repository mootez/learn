import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
})
export class DevisComponent implements OnInit {
  devisForm: FormGroup;
  emailstring: string;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.devisForm = this.fb.group({
      societe: ['', Validators.required],
      name: ['', Validators.required],
      email: [
        'service31clean@gmail.com',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      mobile: ['', Validators.required],
      surface: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f(): any {
    return this.devisForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.devisForm.invalid) {
      return;
    }
    this.emailstring =
      'mailto:' +
      this.devisForm.value.email +
      '?Subject= Demande de devis ' +
      '&body=' +
      this.devisForm.value.name +
      '-' +
      this.devisForm.value.societe +
      '-' +
      this.devisForm.value.mobile +
      '-' +
      this.devisForm.value.surface +
      '-' +
      this.devisForm.value.message;
    const anchor = document.createElement('a');
    anchor.href = this.emailstring;
    anchor.click();
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.devisForm.reset();
  }
}
