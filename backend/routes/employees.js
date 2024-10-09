const express = require('express');
const router = express.Router();
const { db, bucket } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

// Middleware to protect routes
router.use(authMiddleware);

// Add New Employee
router.post('/', async (req, res) => {
  const { name, sname, email, phone, idnum, role } = req.body;
  try {
    const newEmployee = {
      name,
      sname,
      email,
      phone,
      idnum,
      role,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    const docRef = await db.collection('employees').add(newEmployee);
    res.status(201).json({ id: docRef.id, ...newEmployee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Employees
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('employees').get();
    const employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Employee
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, sname, email, phone, idnum, role } = req.body;
  try {
    await db.collection('employees').doc(id).update({
      name,
      sname,
      email,
      phone,
      idnum,
      role,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Optionally, move to 'formerEmployees' collection
    const employee = await db.collection('employees').doc(id).get();
    if (!employee.exists) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    const formerEmployee = employee.data();
    await db.collection('formerEmployees').add(formerEmployee);
    await db.collection('employees').doc(id).delete();

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Search Employee by ID
router.get('/search/:idnum', async (req, res) => {
  const { idnum } = req.params;
  try {
    const snapshot = await db.collection('employees').where('idnum', '==', idnum).get();
    if (snapshot.empty) {
      return res.status(404).json({ error: 'No matching employees found' });
    }
    const employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
