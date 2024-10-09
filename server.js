// server.js
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());


app.post('/api/employees', async (req, res) => {
  try {
    const { name, sname, email, phone, idnum, image } = req.body;
    
    const db = admin.firestore();
    const employeeRef = await db.collection('employees').add({
      name,
      sname,
      email,
      phone,
      idnum,
      image,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).send({ message: 'Employee registered successfully', id: employeeRef.id });
  } catch (error) {
    console.error('Error registering employee:', error);
    res.status(500).send({ error: 'Failed to register employee' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
