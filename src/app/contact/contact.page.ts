import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {
  name;
  email;
  message;

  formError = false;
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private fun: AngularFireFunctions) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(27)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]],
    });
  }

  ngAfterViewInit() {
    if (!this.emailForm.controls.valid && !this.emailForm.pristine) {
      this.formError = true;
    }
    this.formError = false;
  }

  sendEmail() {
    this.name= this.emailFormControl.name;
    this.email= this.emailFormControl.email;
    this.message= this.emailFormControl.message;

    const callable = this.fun.httpsCallable('genericEmail');
    callable({ name: this.name, email: this.email, message: this.message }).subscribe();
  }

  get emailFormControl() {
    return this.emailForm.controls;
  }
}
