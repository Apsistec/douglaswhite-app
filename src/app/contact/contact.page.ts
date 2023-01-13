import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

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
    private toast: ToastController,
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
          Validators.maxLength(50),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z]+"
          ),
          Validators.maxLength(50),
          Validators.email,
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  get errorControls() {
    return this.emailForm.controls;
  }

  async onSubmit() {
    const name: string = this.errorControls['name'].value;
    const email: string = this.errorControls['email'].value;
    const message: string = this.errorControls['message'].value;
    console.log(this.errorControls);
    try {
      const submitEmailForm = this.fun.httpsCallable('genericEmail');
      await submitEmailForm({
        name: name,
        email: email,
        message: message,
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
    } catch (error: any) {
      const alerter = await this.alert.create({
        header: error.header,
        message: error.message,
      });
      await alerter.present();
    }
  }
}
