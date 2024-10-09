const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebase');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Admin Registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      password,
      emailVerified: false,
      disabled: false
    });

    // Assign custom claims if needed
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });

    // Optionally, store additional admin info in Firestore
    await db.collection('admins').doc(userRecord.uid).set({
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Firebase Admin SDK doesn't handle sign-in directly.
    // Use Firebase Auth REST API or integrate with Firebase client SDK on frontend.

    // For simplicity, assume frontend handles sign-in and sends ID token
    res.status(200).json({ message: 'Login via frontend' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;