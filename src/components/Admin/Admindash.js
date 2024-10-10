import React, { useState } from 'react';
import { 
  Box, Button, Typography, Grid, Dialog, DialogActions, DialogContent, 
  DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Admindash() {
  const navigate = useNavigate();
  const [openEmployeeDialog, setOpenEmployeeDialog] = useState(false);
  const [openAdminDialog, setOpenAdminDialog] = useState(false);

  // Form state
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    age: '',
    idNumber: '',
    photo: null, // Changed to store the file, not just a URL
    role: '',
  });
  
  const [adminForm, setAdminForm] = useState({
    name: '',
    age: '',
    idNumber: '',
    photo: null, // Changed to store the file, not just a URL
    role: '',
  });

  // Handlers to open/close the "Add Employee" dialog
  const handleOpenEmployeeDialog = () => {
    setOpenEmployeeDialog(true);
  };

  const handleCloseEmployeeDialog = () => {
    setOpenEmployeeDialog(false);
  };

  // Handlers to open/close the "Add Admin" dialog
  const handleOpenAdminDialog = () => {
    setOpenAdminDialog(true);
  };

  const handleCloseAdminDialog = () => {
    setOpenAdminDialog(false);
  };

  // Form change handlers
  const handleEmployeeFormChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm({ ...employeeForm, [name]: value });
  };

  const handleAdminFormChange = (e) => {
    const { name, value } = e.target;
    setAdminForm({ ...adminForm, [name]: value });
  };

  // Handle image upload for employee
  const handleEmployeePhotoUpload = (e) => {
    setEmployeeForm({ ...employeeForm, photo: e.target.files[0] }); // Store the uploaded file
  };

  // Handle image upload for admin
  const handleAdminPhotoUpload = (e) => {
    setAdminForm({ ...adminForm, photo: e.target.files[0] }); // Store the uploaded file
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Super Admin Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleOpenEmployeeDialog}>
            Add Employee
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => navigate('/viewemployees')}>
            View Employees
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleOpenAdminDialog}>
            Add Admin
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => navigate('/manage-admins')}>
            Manage Admins
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => navigate('/profile')}>
            View Profile
          </Button>
        </Grid>
      </Grid>

      {/* Add Employee Dialog */}
      <Dialog open={openEmployeeDialog} onClose={handleCloseEmployeeDialog}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Name and Surname"
            name="name"
            value={employeeForm.name}
            onChange={handleEmployeeFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            type="number"
            value={employeeForm.age}
            onChange={handleEmployeeFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="ID Number"
            name="idNumber"
            value={employeeForm.idNumber}
            onChange={handleEmployeeFormChange}
          />
          {/* Image upload field */}
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, mb: 2 }}
          >
            Upload Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleEmployeePhotoUpload}
            />
          </Button>
          {employeeForm.photo && (
            <Typography variant="body2">
              {employeeForm.photo.name}
            </Typography>
          )}
          <FormControl fullWidth margin="normal">
            <InputLabel>Role in Company</InputLabel>
            <Select
              name="role"
              value={employeeForm.role}
              onChange={handleEmployeeFormChange}
            >
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEmployeeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseEmployeeDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Admin Dialog */}
      <Dialog open={openAdminDialog} onClose={handleCloseAdminDialog}>
        <DialogTitle>Add Admin</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Name and Surname"
            name="name"
            value={adminForm.name}
            onChange={handleAdminFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            type="number"
            value={adminForm.age}
            onChange={handleAdminFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="ID Number"
            name="idNumber"
            value={adminForm.idNumber}
            onChange={handleAdminFormChange}
          />
          {/* Image upload field */}
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, mb: 2 }}
          >
            Upload Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleAdminPhotoUpload}
            />
          </Button>
          {adminForm.photo && (
            <Typography variant="body2">
              {adminForm.photo.name}
            </Typography>
          )}
          <FormControl fullWidth margin="normal">
            <InputLabel>Role in Company</InputLabel>
            <Select
              name="role"
              value={adminForm.role}
              onChange={handleAdminFormChange}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Super Admin">Super Admin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdminDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAdminDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Admindash;
