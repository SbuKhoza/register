const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

// Protect all admin routes
router.use(authMiddleware);

// Add another Admin
router.post('/add', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      emailVerified: false,
      disabled: false
    });

    // Assign admin custom claims
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });

    // Store in Firestore
    await db.collection('admins').doc(userRecord.uid).set({
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'Admin added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove Admin
router.delete('/remove/:uid', async (req, res) => {
  const { uid } = req.params;
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: false });
    await db.collection('admins').doc(uid).delete();
    res.status(200).json({ message: 'Admin removed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Admin Profile
router.get('/profile', async (req, res) => {
  const uid = req.user.uid;
  try {
    const adminDoc = await db.collection('admins').doc(uid).get();
    if (!adminDoc.exists) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.status(200).json({ id: uid, ...adminDoc.data() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;