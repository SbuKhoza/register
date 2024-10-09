import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '', sname: '', email: '', phone: '', idnum: '', role: '', imageFile: null
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        imageFile: file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'First name is required';
    if (!formData.sname) errors.sname = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^0\d{9}$/.test(formData.phone) && !/^27\d{9}$/.test(formData.phone)) {
      errors.phone = 'Phone number must start with "0" or "27" and be followed by 9 digits';
    }
    if (!formData.idnum) {
      errors.idnum = 'ID is required';
    } else if (!/^\d{5}$/.test(formData.idnum)) {
      errors.idnum = 'ID must be exactly 5 digits';
    }
    if (!formData.role) {
      errors.role = 'Role is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    try {
      const user = auth.currentUser;
      if (!user) {
        setError('User not authenticated');
        return;
      }

      const idToken = await user.getIdToken();

      let imageUrl = '';
      if (formData.imageFile) {
        const imageRef = ref(storage, `employee-images/${formData.imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, formData.imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const employeeData = {
        name: formData.name,
        sname: formData.sname,
        email: formData.email,
        phone: formData.phone,
        idnum: formData.idnum,
        role: formData.role,
        image: imageUrl
      };

      await axios.post('http://localhost:5000/api/employees', employeeData, {
        headers: {
          Authorization: `Bearer ${idToken}`
        }
      });

      setSuccessMessage('Employee added successfully');
      setFormData({ name: '', sname: '', email: '', phone: '', idnum: '', role: '', imageFile: null });
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Failed to add employee');
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Register Employee
      </Typography>

      <TextField
        fullWidth
        label="First Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Last Name"
        name="sname"
        value={formData.sname}
        onChange={handleChange}
        error={!!errors.sname}
        helperText={errors.sname}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />

      <TextField
        fullWidth
        label="ID Number"
        name="idnum"
        value={formData.idnum}
        onChange={handleChange}
        error={!!errors.idnum}
        helperText={errors.idnum}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        error={!!errors.role}
        helperText={errors.role}
        margin="normal"
      />

      <Button variant="contained" component="label" sx={{ marginTop: 2 }}>
        Upload Image
        <input type="file" hidden name="image" onChange={handleChange} />
      </Button>

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 3 }}>
        Save
      </Button>

      {successMessage && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          {successMessage}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default Form;
