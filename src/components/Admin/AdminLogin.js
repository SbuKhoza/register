import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 3,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: 'white',
          width: '300px'
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default AdminLogin;