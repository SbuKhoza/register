import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { IconButton, Button } from '@material-ui/core'; // Import material UI components
import { useNavigate } from 'react-router-dom'; // For navigation (React Router)
import { useState } from 'react'; // For dialog state management


function Navigation() {
  const navigate = useNavigate(); // Hook for navigation
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog

  const handleLogout = () => {
    // Logic to handle logout
    console.log("User logged out");
    // Perform logout operations here
  };

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen); // Toggle dialog open state
  };

  return (
    <div className='navv'>
      <div className='heading'>
        <nav>
          <div className='logo'>
            <img src='logo.png' alt='logo'></img>
          </div>

          <div className='search'>
            {/* Search icon for mobile screens */}
            <IconButton onClick={toggleDialog} color="primary">
              <FaSearch />
            </IconButton>
          </div>

          <div className='logout'>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>

          <div className='profile'>
            <img src='boy.png' alt='profile'></img>
          </div>
        </nav>
      </div>

      <div className='nav2'>
        <h1>Hi Malloya!</h1>
      </div>

      <div className='nav3'>
        <div className='dash'>
          <Button variant="contained" color="primary" onClick={() => navigate('/home')}>
            Dashboard
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate('/employees')}>
            Employees
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate('/former-employees')}>
            Former Employees
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate('/register')}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
