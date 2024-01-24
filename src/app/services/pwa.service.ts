import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  promptEvent: any;
  deferredPrompt: any;

  constructor(private swUpdate: SwUpdate, public toast: ToastController) {}

  async updateSW() {
    if (this.swUpdate.isEnabled) {
      const updateAvailable = await this.swUpdate.checkForUpdate();
      if (updateAvailable) {
        const updated = await this.swUpdate.activateUpdate();
        if (updated) {
          const toaster = await this.toast.create({
            header: 'Update Successful',
            message:
              'The update has been installed and the app is ready for use.',
            color: 'success',
            position: 'middle',
            duration: 3000,
            icon: 'information-circle-sharp',
            buttons: [
              {
                side: 'end',
                text: 'Close',
                role: 'cancel',
              },
            ],
          });
          await toaster.present();
        }
      }
    }
  }

  ionViewWillEnter() {
    window.addEventListener('beforeinstallprompt', (e) => {
      this.promptEvent = event;
    });

    window.addEventListener('appinstalled', (event) => {
      alert('installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }

  add_to_home(e: any) {
    debugger;
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        alert('User accepted the prompt');
      } else {
        alert('User dismissed the prompt');
      }
      this.deferredPrompt = null;
    });
  }
}
