import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
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
  emailForm!: FormGroup;
  name!: string;
  email: any;
  message: any;
  isLoading = false;
  res!: Result;
  // raw;
  constructor(
    private toast: ToastController,
    private alert: AlertController,
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

    // this.raw = this.emailForm.getRawValue();
  }
  // ngAfterViewInit() {
  //   console.log(this.raw, 'raw');
  // }

  get emailFormControl() {
    return this.emailForm.controls;
  }

  // async loadSpinner() {
  //   const load = await this.loadingController
  //     .create({
  //       spinner: 'circles',
  //     });
  //     await load.present()
  //     // .then((a) => {
  //     //   a.present().then(() => {
  //     //     // if (!this.isLoading) {
  //     //     // a.dismiss();
  //     //     // }
  //     //   });
  //     // });
  // }

  async emailFormHandler() {
    this.name = this.emailFormControl['name'].value;
    this.email = this.emailFormControl['email'].value;
    this.message = this.emailFormControl['message'].value;
    // await this.loadSpinner();
    try {
      const submitEmailForm = this.fun.httpsCallable('genericEmail');
      submitEmailForm({
        name: this.name,
        email: this.email,
        message: this.message,
      }).subscribe(async (res: Result) => {
        this.emailForm.reset;
        this.res = res;
        // console.log(this.res, 'res');
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
    } catch (error: any) {
      const alerter = await this.alert.create({
        header: error.header,
        message: error.message,
      });
      alerter.present();
    }
  }

  // updateRaw() {
  //   console.log(this.raw, 'raw');
  //   // return this.raw;
  // }
}
