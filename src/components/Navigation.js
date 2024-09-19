import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Dialog, TextField, Box, Typography, Avatar, Menu, MenuItem, Drawer,
  List, ListItem, ListItemText, useMediaQuery, CircularProgress
} from '@mui/material';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Form from './Form'; // Import the form component

const Navigation = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Hamburger visible from 768px and below
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [displayName, setDisplayName] = useState(localStorage.getItem('displayName') || ''); // Retrieve saved name
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || 'boy.png'); // Retrieve saved profile picture
  const [searchOpen, setSearchOpen] = useState(false);
  const [editedName, setEditedName] = useState(displayName);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false); // State for form dialog

  useEffect(() => {
    // Save display name in localStorage whenever it changes
    localStorage.setItem('displayName', displayName);
  }, [displayName]);

  useEffect(() => {
    // Save profile picture in localStorage whenever it changes
    localStorage.setItem('profilePic', profilePic);
  }, [profilePic]);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('User logged out');
      setLoading(false);
    }, 1500); // Simulate a logout loading
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const openProfileDialog = () => {
    setProfileDialogOpen(true);
    handleProfileClose();
  };

  const closeProfileDialog = () => {
    setProfileDialogOpen(false);
  };

  const handleSaveProfile = () => {
    setDisplayName(editedName); // Save edited name as display name
    closeProfileDialog();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result); // Update the profile picture with the image data
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const openFormDialog = () => {
    setFormDialogOpen(true);
  };

  const closeFormDialog = () => {
    setFormDialogOpen(false);
  };

  return (
    <Box>
      {/* Loader when loading */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      )}

      {/* AppBar with Toolbar */}
      {!loading && (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <div className="logo">
              <h2>Malloya Group</h2>
            </div>

            {/* Mobile Hamburger Menu */}
            {isMobile ? (
              <IconButton color="inherit" onClick={toggleDrawer}>
                <FaBars />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
                <IconButton color="inherit" onClick={handleProfileClick}>
                  <Avatar src={profilePic} alt="profile" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={openProfileDialog}>Edit Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            <ListItem button onClick={() => navigate('/home')}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => navigate('/employees')}>
              <ListItemText primary="Employees" />
            </ListItem>
            <ListItem button onClick={() => navigate('/former-employees')}>
              <ListItemText primary="Former Employees" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
            <ListItem button>
              <IconButton onClick={toggleSearch}>
                <FaSearch />
              </IconButton>
              {searchOpen && (
                <TextField
                  size="small"
                  placeholder="Search..."
                  autoFocus
                  onBlur={() => setSearchOpen(false)} // Close search field on blur
                />
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Additional div for search, navigation buttons, and user name */}
      {!isMobile && !loading && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          p: 2, 
          backgroundColor: '#e0f7fa' // Background color for navigation buttons
        }}>
          {/* Search Icon and Field */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleSearch}>
              <FaSearch />
            </IconButton>
            {searchOpen && (
              <TextField
                size="small"
                placeholder="Search..."
                autoFocus
                onBlur={() => setSearchOpen(false)} // Close search field on blur
              />
            )}
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/home')}>
              Dashboard
            </Button>
            <Button color="inherit" onClick={() => navigate('/employees')}>
              Employees
            </Button>
            <Button color="inherit" onClick={() => navigate('/former-employees')}>
              Former Employees
            </Button>
          </Box>

          {/* Logged in user */}
          <Typography variant="h6" sx={{ typography: { sm: 'h6', xs: 'subtitle1' } }}>
            {displayName || 'No Name Set'}
          </Typography>
        </Box>
      )}

      {/* Profile Popup Dialog */}
      <Dialog open={profileDialogOpen} onClose={closeProfileDialog} fullWidth maxWidth="sm">
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Edit Profile</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Avatar src={profilePic} alt="profile" sx={{ width: 100, height: 100 }} />
          </Box>
          <Button variant="contained" component="label" color="primary" fullWidth sx={{ mt: 2 }}>
            Change Profile Picture
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>

          {/* Editable Display Name */}
          <TextField
            label="Display Name"
            fullWidth
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSaveProfile}>
            Save
          </Button>
        </Box>
      </Dialog>

      {/* Add Employee Button */}
      <div className="add">
        <Button variant="contained" color="primary" onClick={openFormDialog}>
          Add Employee
        </Button>
      </div>

      {/* Form Popup Dialog */}
      <Dialog open={formDialogOpen} onClose={closeFormDialog} fullWidth maxWidth="sm">
        <Form />
      </Dialog>
    </Box>
  );
};

export default Navigation;
