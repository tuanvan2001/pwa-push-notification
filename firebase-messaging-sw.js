importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');
const firebaseConfig = {
    apiKey: "AIzaSyCCEp4oELIm5NdsqZ65XvZ74ng3Wze14PM",
    authDomain: "pwa-push-notification-6515f.firebaseapp.com",
    projectId: "pwa-push-notification-6515f",
    storageBucket: "pwa-push-notification-6515f.appspot.com",
    messagingSenderId: "467563842173",
    appId: "1:467563842173:web:3b9c953152f6f13045ff14",
    measurementId: "G-SE1QDB9SEQ"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('push', event => {
    console.log(messaging)
    const data = event.notification.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/images/512.png',
    });
});
