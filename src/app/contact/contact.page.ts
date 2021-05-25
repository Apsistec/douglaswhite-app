import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { ErrorPopoverComponent } from '../shared/error-popover/error-popover.component';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit, AfterViewInit {
  name;
  email;
  message;
  // err= new EventEmitter();

  formError = false;
  emailForm: FormGroup;

  constructor(
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
