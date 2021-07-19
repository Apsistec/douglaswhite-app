import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

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
  isLoading = false;
  res: Result;

  constructor(
    private toast: ToastController,
    private fb: FormBuilder,
    private fun: AngularFireFunctions,
    private loadingController: LoadingController,
    private router: Router
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

  async loadSpinner() {
    const load = await this.loadingController
      .create({
        spinner: 'circles',
        duration: 1600,
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss();
          }
        });
      });
  }

  sendEmail() {
    this.isLoading;
    this.loadSpinner();
    this.name = this.emailFormControl.name.value;
    this.email = this.emailFormControl.email.value;
    this.message = this.emailFormControl.message.value;

    const callable = this.fun.httpsCallable('genericEmail');
    callable({
      name: this.name,
      email: this.email,
      message: this.message,
    }).subscribe((res) => {
      this.res = res;
      this.isLoading = false;
      this.router.navigate(['/about']).then(async () => {
        const toaster = await this.toast.create({
          header: this.res.header,
          message: this.res.message,
          cssClass: 'successT',
          position: 'middle',
          keyboardClose: true,
          duration: 10000,
        });
        toaster.present();
      });
    });
  }
}
