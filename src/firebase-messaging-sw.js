import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getMessaging,
  isSupported,
  onBackgroundMessage,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-sw.js";

const app = initializeApp({
  apiKey: "AIzaSyCQj3laqd0VNzQ3oYKcBq2spcXf90YoHSU",
  authDomain: "douglaswhite-app.firebaseapp.com",
  databaseURL: "https://douglaswhite-app-default-rtdb.firebaseio.com",
  projectId: "douglaswhite-app",
  storageBucket: "douglaswhite-app.appspot.com",
  messagingSenderId: "904022686145",
  appId: "1:904022686145:web:5de0197f1b306f229a1740",
  measurementId: "G-DCDX1X2N57",
});

isSupported().then((isSupported) => {
  if (isSupported) {
    const messaging = getMessaging(app);

    onBackgroundMessage(
      messaging,
      ({ notification: { title, body, image } }) => {
        self.registration.showNotification(title, {
          body,
          icon: image || "/assets/icons/icon-72x72.png",
        });
      }
    );
  }
});
