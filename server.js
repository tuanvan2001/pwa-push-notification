const admin = require('firebase-admin');
var serviceAccount = {
        "type": "service_account",
        "project_id": "pwa-push-notification-6515f",
        "private_key_id": "5ee9a4288d5faa9f9d48b864f3ba2532809bee7d",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDjZNEdMnviYBAI\nzsNSWKAo7lmuteo4QDT06PI3yxTzM93ps08q+lSM2IpqHuagp0iL4T9HjGw7tCm0\n6ZSJE8OyyUQqBb7v17zEeHoeorbgwFwvVvosxArx/P81WEKgsjhfhFAtVcVQTyy7\nh2BxGuVGrIeyiCC1RNiMdHnjxh8wglYtDpXoLKI/Bc7oZu+/+pPTPYxnnOFWZjAU\ndWjiMCyZKIKyuOJslIZ2O+LyzmSojEm0DCPz4fuIeV87SdL4rHjNWIibBczls1xw\ngq8QeZfMpbXmJEyH7uAweBMl6mwRYyUttW2oLjqLw7VvtsVimxkrGYAFG//rCoi+\nQXEtleaZAgMBAAECggEAGKFYRTatVIfd32uwnGrHw6c4RO76FRMJ/r0nVK5v8Sfd\nEZiVKq09cJluj1q+1bKeQ7MnjN3Dm3PtpeWRwTHy20VnAhDn7Z1gmlIHvZRtBUsm\nBmVVaSPoS5iBIYtogXTMcQwpOGqMmiD5UhaydjiDknQoU/OKwhetnQkWFXs68EtO\n4ltswT3nN8njhrSuGRetqGXnVdE8guWZtjCOm/AABC/8RV9ExieEIYO1CzVcRLDd\noaG02I2f0EcBd250AnuKA5adsuTKqqK3Gd0gqINM0BSxk4f+keASi9W7ZUtmIT3H\nnpogPUAXWNl569St5zGVYrXQc0p+mzpswwW5UV+KQQKBgQD2spFe9nva8Vqd9pgA\nCGKCyelAKeeukXhxiwONpBvQC4MuhsNn1CO7ZKCbYpyRuGJOmwNE46dxPLg54mnv\nqnmyG2Jrkc1Vhd+tV1pbABWAiIFg5Xq0qJiSWwafVEQePZQuTtzlmMgwXgfJ3Gpq\nUDahwES32iXEOy+DYPVVvXvk4wKBgQDr9+fNFjwcHGQA1scR11BGHludwPT4V5r4\nMoXg8lldK/BS0xFi71F0xMYgXZ6b87q5/3pPBJlx8eE0BWdD0x6DyyJ/K13eGkuj\nrnNYSMuReGc0lfSHXDZot1UcSvYYq9qR1PlFPuTQ7LHRnGN4Q3TwPf9d3Ku6/+0y\ndpiYxxpbUwKBgG1InW1b83ICCQqA+sTI8hrOJy3tYlzKxHhIBMLyN//pmas6t8V/\nDHUvFpa/EGzdKW946/HQh5R6OYIq8pLhChgEWY0dgcCpFXVMhRJa7yuJTQcHoVv2\nc+AhwsVCJwrebI43EVQEYmpKvViG8/00m378FXT8hk5viZTBluzsi73RAoGBANUw\nEqL9ta0IEWmYoh4CU6ol/0vVav172KzoqIAFNKuy6NtLimfCI+vFY+MV8hif6VHl\n+VCurRt/FqHzR8rFUMptmmseeR4Sz8e/8sIOcqypBUVDPbuVmiqdiC2ZpCHCEiSz\nL8pZ+kyvrC/ehRfAikQLH05j8ltuoZR4BYHyUGO1AoGAUOQTWNBK5taohXdz1YCm\nRY8qxqtri7iTwV7mV7qDGLzDJYG7LRUEl6rKHEpDggQOo6H0zxyc3ZFlDNfni8kf\n8WzRHsCB8+oKLcWwAc3OMGwXbtDU9N9+TFrzXpN84OhIzH7FUwsvNmaF7wrOl/zL\n6s+MlIUKURMxSwxF4eCfLuY=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-paf26@pwa-push-notification-6515f.iam.gserviceaccount.com",
        "client_id": "117835304385922599061",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-paf26%40pwa-push-notification-6515f.iam.gserviceaccount.com"
    }
;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pwa-push-notification-6515f-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const message = {
    notification: {
        title: 'New Message',
        body: 'You have a new message',

    },
    token: 'erDja1WTFP_8gr1qlG7l4R:APA91bHXXv0g5Y_9CP0FcFsR1Jw9oGSa6TekK-mj4uETtqclU2QXgeaLQmRR2HMRa224YvTDlvptuMnGpxFyZKs2rtPZYM6zvwduHWE7alZxWKRgLe6H1FbTp9_TMGFQOWRf0nMkZKk3'
};

admin.messaging().send(message)
    .then((response) => {
        console.log('Notification sent successfully:', response);
    })
    .catch((error) => {
        console.log('Unable to send notification:', error);
    });


