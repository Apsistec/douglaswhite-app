import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController, ToastController } from '@ionic/angular';
import { ErrorPopoverComponent } from '../shared/error-popover/error-popover.component';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {
  emailForm: FormGroup;
  name;
  email;
  message;
  formError = false;
  results;

  constructor(
    private toast: ToastController,
    private fb: FormBuilder,
    private fun: AngularFireFunctions,
    private popover: PopoverController
    ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(27)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3000)]],
    });
  }

  ngAfterViewInit() {
    if (!this.emailForm.controls.valid && !this.emailForm.pristine) {
      this.formError = true;
    }
    this.formError = false;
  }

    get emailFormControl() {
      return this.emailForm.controls;
    }

  async errorPopover(ev){
    console.log("event: ", ev);
    const popover = await this.popover.create({
      component: ErrorPopoverComponent,
      cssClass: 'my-custom-class',
      showBackdrop: false,
      event: ev,
      translucent: true
    });
    await popover.present();
  }

  async sendEmail() {
    this.name= this.emailFormControl.name;
    this.email= this.emailFormControl.email;
    this.message= this.emailFormControl.message;

    const callable = this.fun.httpsCallable('genericEmail');
    this.results = await callable({ name: this.name, email: this.email, message: this.message }).subscribe();
    this.emailForm.reset();
    if (this.results && this.results !== null){
     const toaster = await this.toast.create({
      header: 'Message Sent',
      message: 'Thank you! Douglas White will be in touch asap!',
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 4000
    });
    toaster.present();
    }
  }


}
