// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCEp4oELIm5NdsqZ65XvZ74ng3Wze14PM",
    authDomain: "pwa-push-notification-6515f.firebaseapp.com",
    projectId: "pwa-push-notification-6515f",
    storageBucket: "pwa-push-notification-6515f.appspot.com",
    messagingSenderId: "467563842173",
    appId: "1:467563842173:web:3b9c953152f6f13045ff14",
    measurementId: "G-SE1QDB9SEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);