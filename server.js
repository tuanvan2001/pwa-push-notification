const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'YOUR_DATABASE_URL'
});

const messaging = admin.messaging();

const message = {
    data: {
        title: 'New Message',
        body: 'You have a new message'
    },
    token: 'FCM_TOKEN'
};

messaging.sendToDevice(message.token, message)
    .then((response) => {
        console.log('Notification sent successfully:', response);
    })
    .catch((error) => {
        console.log('Unable to send notification:', error);
    });


