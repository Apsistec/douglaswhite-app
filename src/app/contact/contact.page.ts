import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
  isLoading = false;
  res!: Result;

  constructor(
    // private toast: ToastController,
    private alert: AlertController,
    private fb: FormBuilder,
    private fun: AngularFireFunctions
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
    const name: string = this.emailFormControl['name'].value;
    const email: string = this.emailFormControl['email'].value;
    const message: string = this.emailFormControl['message'].value;
    try {
      const submitEmailForm = this.fun.httpsCallable('genericEmail');
      submitEmailForm({
        name: name,
        email: email,
        message: message,
      }).subscribe(async (res: Result) => {
        // this.emailForm.reset;
        this.res = res;
        // const toaster = await this.toast.create({
        //   header: this.res.header,
        //   message: this.res.message,
        //   cssClass: 'successT',
        //   position: 'bottom',
        //   keyboardClose: true,
        //   duration: 4000,
        // });
        // await toaster.present();
      });
    } catch (error: any) {
      const alerter = await this.alert.create({
        header: error.header,
        message: error.message,
      });
      alerter.present();
    }
  }
}
