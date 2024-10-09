import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Top from './Top';
import Navigation from './components/Navigation';
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material';
import Form from './components/Form';  // Import the Form component

function Home() {
    const [searchOption, setSearchOption] = useState('fname');
    const [searchValue, setSearchValue] = useState('');
    const [showDialog, setShowDialog] = useState(false); // State to control the search dialog
    const [showRegisterDialog, setShowRegisterDialog] = useState(false); // State to control the register dialog
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSearchOption(event.target.value);
        setSearchValue('');
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        if (searchOption === 'fname') {
            if (/^[a-zA-Z]*$/.test(value)) {
                setSearchValue(value);
            }
        } else if (searchOption === 'emp-id') {
            if (/^\d*$/.test(value)) {
                setSearchValue(value);
            }
        }
    };

    const handleSearch = () => {
        // Placeholder for search logic
        const results = [];
        navigate('/results', { state: { results } });
        setShowDialog(false); // Close dialog after search
    };

    const toggleDialog = () => {
        setShowDialog(prev => !prev); // Toggle search dialog visibility
    };

    const toggleRegisterDialog = () => {
        setShowRegisterDialog(prev => !prev); // Toggle register dialog visibility
    };

    return (
        <div className="App">
            <div className='container'>
                <Navigation/>
                <div className='main'>
                    <Top />
                    
                    
                </div>

                {/* Search Dialog Popup */}
                {showDialog && (
                    <div className="dialog">
                        <div className="dialog-title">Search Employees</div>
                        <div className="dialog-content">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                            <div style={{ marginTop: '1rem' }}>
                                <label>
                                    <input
                                        type="radio"
                                        value="fname"
                                        checked={searchOption === 'fname'}
                                        onChange={handleOptionChange}
                                    />
                                    Employee Name
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="emp-id"
                                        checked={searchOption === 'emp-id'}
                                        onChange={handleOptionChange}
                                    />
                                    Employee ID
                                </label>
                            </div>
                        </div>
                        <div className="dialog-actions">
                            <button onClick={toggleDialog}>Cancel</button>
                            <button onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                )}

                {/* Register Employee Dialog */}
                <Dialog open={showRegisterDialog} onClose={toggleRegisterDialog}>
                    <DialogContent>
                        <Form />  {/* Load the Form component */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleRegisterDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Home;