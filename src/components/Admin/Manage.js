import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Typography, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Manage() {
  const location = useLocation();
  const [admins, setAdmins] = useState(location.state?.admins || []);  // Use optional chaining to safely access admins
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // Function to delete an admin
  const handleDeleteAdmin = (adminId) => {
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  // Function to open edit dialog
  const handleEditAdmin = (admin) => {
    setSelectedAdmin(admin);
    setOpenEditDialog(true);
  };

  // Function to save edited admin
  const handleSaveEditAdmin = () => {
    setAdmins(admins.map(admin => admin.id === selectedAdmin.id ? selectedAdmin : admin));
    setOpenEditDialog(false);
  };

  // Function to suspend/block an admin
  const handleSuspendAdmin = (adminId) => {
    setAdmins(admins.map(admin => admin.id === adminId ? { ...admin, suspended: !admin.suspended } : admin));
  };

  // Handle edit form change
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedAdmin({ ...selectedAdmin, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h4">Manage Admins</Typography>
      <Grid container spacing={2}>
        {admins.map((admin) => (
          <Grid item key={admin.id}>
            <Box border={1} padding={2} width={300}>
              <Typography variant="h6">{admin.name}</Typography>
              <Typography>Age: {admin.age}</Typography>
              <Typography>ID: {admin.idNumber}</Typography>
              <Typography>Role: {admin.role}</Typography>
              <Typography>Status: {admin.suspended ? 'Suspended' : 'Active'}</Typography>
              <Button onClick={() => handleEditAdmin(admin)}>Edit</Button>
              <Button onClick={() => handleDeleteAdmin(admin.id)}>Delete</Button>
              <Button onClick={() => handleSuspendAdmin(admin.id)}>
                {admin.suspended ? 'Unsuspend' : 'Suspend'}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Edit Admin Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Admin</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Name and Surname"
            name="name"
            value={selectedAdmin?.name || ''}
            onChange={handleEditFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            type="number"
            value={selectedAdmin?.age || ''}
            onChange={handleEditFormChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="ID Number"
            name="idNumber"
            value={selectedAdmin?.idNumber || ''}
            onChange={handleEditFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveEditAdmin}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Manage;
