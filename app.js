const firebaseConfig = {
    apiKey: "AIzaSyCCEp4oELIm5NdsqZ65XvZ74ng3Wze14PM",
    authDomain: "pwa-push-notification-6515f.firebaseapp.com",
    projectId: "pwa-push-notification-6515f",
    storageBucket: "pwa-push-notification-6515f.appspot.com",
    messagingSenderId: "467563842173",
    appId: "1:467563842173:web:3b9c953152f6f13045ff14",
    measurementId: "G-SE1QDB9SEQ"
};
// Khởi tạo ứng dụng Firebase
firebase.initializeApp(firebaseConfig);

// Lấy đối tượng messaging
const messaging = firebase.messaging();

// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('Service Worker registered:', registration);
            // Đăng ký thiết bị với FCM
            messaging.requestPermission()
                .then(() => messaging.getToken())
                .then((token) => {
                    document.getElementById("token").innerText = token
                    console.log('FCM token:', token);
                })
                .catch((error) => {
                    console.log('Unable to get FCM token:', error);
                });
        })
        .catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}