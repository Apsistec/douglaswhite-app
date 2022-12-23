import { Alert } from 'selenium-webdriver';

import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
=======
// import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Functions, httpsCallableData } from '@angular/fire/functions';

import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
>>>>>>> Stashed changes
import {
  AlertController,
  ToastController,
} from '@ionic/angular';

interface Result {
  header: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit {
  emailForm: FormGroup;
  name;
  email;
  message;
  res: Result;

  constructor(
    private fun: Functions,
    private toast: ToastController,
    private alert: AlertController,
<<<<<<< Updated upstream
    private fb: FormBuilder,
    private fun: AngularFireFunctions,
    private loadingController: LoadingController,
    private router: Router
=======
    private fb: UntypedFormBuilder,
>>>>>>> Stashed changes
  ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(27),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(1000),
        ],
      ],
    });

  }

  get emailFormControl() {
    return this.emailForm.controls;
  }

  async emailFormHandler() {
    this.name = this.emailFormControl.name.value;
    this.email = this.emailFormControl.email.value;
    this.message = this.emailFormControl.message.value;
    try {
      const submitEmailForm = httpsCallableData(this.fun,'genericEmail')
      submitEmailForm({
        name: this.name,
        email: this.email,
        message: this.message,
      }).subscribe(async (res: Result) => {
        this.emailForm.reset;
        this.res = res;
        const toaster = await this.toast.create({
          header: this.res.header,
          message: this.res.message,
          cssClass: 'successT',
          position: 'bottom',
          keyboardClose: true,
          duration: 4000,
        });
        await toaster.present();
      });
    } catch (error) {
      const alerter = await this.alert.create({
        header: error.header,
        message: error.message,
      });
      alerter.present();
    }
  }

}
