// Form.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    sname: '',
    email: '',
    phone: '',
    idnum: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
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
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        let imageUrl = '';
        if (formData.image) {
          const imageRef = ref(storage, `employees/${formData.email}`);
          await uploadString(imageRef, formData.image, 'data_url');
          imageUrl = await getDownloadURL(imageRef);
        }

        await addDoc(collection(db, 'employees'), {
          name: formData.name,
          sname: formData.sname,
          email: formData.email,
          phone: formData.phone,
          idnum: formData.idnum,
          image: imageUrl
        });

        setSuccessMessage('Employee saved successfully');
        setFormData({ name: '', sname: '', email: '', phone: '', idnum: '', image: '' });
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        console.error('Error saving employee:', error);
        setErrors({ submit: 'Failed to save employee. Please try again.' });
      }
    } else {
      setErrors(errors);
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

      {errors.submit && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {errors.submit}
        </Alert>
      )}
    </Box>
  );
};

export default Form;
