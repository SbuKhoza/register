import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function AddEmployee({ handleClose }) {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    age: '',
    idNumber: '',
    photo: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add employee logic here
    console.log('New Employee:', employee);
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
      <TextField label="Name" name="name" value={employee.name} onChange={handleInputChange} fullWidth required />
      <TextField label="Surname" name="surname" value={employee.surname} onChange={handleInputChange} fullWidth required />
      <TextField label="Age" name="age" value={employee.age} onChange={handleInputChange} fullWidth required />
      <TextField label="ID Number" name="idNumber" value={employee.idNumber} onChange={handleInputChange} fullWidth required />
      <TextField label="Photo URL" name="photo" value={employee.photo} onChange={handleInputChange} fullWidth />
      <TextField label="Role" name="role" value={employee.role} onChange={handleInputChange} fullWidth required />
      <Box display="flex" justifyContent="space-between">
        <Button type="submit" variant="contained" color="primary">Add Employee</Button>
        <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </Box>
  );
}

export default AddEmployee;