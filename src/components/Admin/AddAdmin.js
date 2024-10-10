import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function AddAdmin({ handleClose }) {
  const [admin, setAdmin] = useState({
    email: '',
    role: 'admin'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add admin logic here
    console.log('New Admin:', admin);
    handleClose(); // Close popup after submitting
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
      padding={3}
      maxWidth={400}
    >
      <TextField label="Email" name="email" value={admin.email} onChange={handleInputChange} fullWidth required />
      <Box display="flex" justifyContent="space-between">
        <Button type="submit" variant="contained" color="primary">Add Admin</Button>
        <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </Box>
  );
}

export default AddAdmin;
