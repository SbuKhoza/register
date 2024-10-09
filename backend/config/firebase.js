const admin = require('firebase-admin');
const serviceAccount = require('../path-to-your-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: '<YOUR_FIREBASE_STORAGE_BUCKET>'
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { admin, db, bucket };
