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
  id: any = 'tsparticles';

  constructor(private fb: FormBuilder, private fun: AngularFireFunctions) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(27)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]],
    });


    this.id.load("tsparticles", {
      background: {
        image:
          "url(https://img4.goodfon.com/original/1920x1080/d/b1/abstract-dark-blue-polygonal-background-abstraktsiia-geometr.jpg?d=1)"
      },
      backgroundMask: {
        enable: true
      },
      fpsLimit: 60,
      emitters: {
        direction: "random",
        size: {
          width: 100,
          height: 100
        },
        position: {
          x: 50,
          y: 50
        },
        rate: {
          delay: 0.25,
          quantity: 2
        }
      },
      particles: {
        number: {
          value: 0
        },
        color: {
          value: ["#fff"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 200,
          anim: {
            enable: true,
            speed: 50,
            size_min: 2,
            sync: true,
            startValue: "min",
            destroy: "max"
          }
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "destroy"
          },
          attract: {
            enable: true,
            distance: 250,
            rotateX: 600,
            rotateY: 1200
          }
        },
        stroke: {
          width: 10,
          opacity: 1
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true
        }
      },
      detectRetina: true
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
