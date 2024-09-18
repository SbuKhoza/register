import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, RadioGroup, FormControl, FormControlLabel, Radio, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'; // Import MUI components
import Top from './Top';
import Navigation from './components/Navigation';

const employees = [
    { id: 1, fname: 'Sbu', lname: 'Sbu' },
    { id: 2, fname: 'Victor', lname: 'Victor' },
    { id: 3, fname: 'Malloya', lname: 'Malloya' }
];

function Home() {
    const [searchOption, setSearchOption] = useState('fname');
    const [searchValue, setSearchValue] = useState('');
    const [showDialog, setShowDialog] = useState(false); // State to control the dialog
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
        let results = [];
        if (searchOption === 'fname') {
            results = employees.filter(emp =>
                emp.fname.toLowerCase().includes(searchValue.toLowerCase())
            );
        } else if (searchOption === 'emp-id') {
            results = employees.filter(emp =>
                emp.id.toString().includes(searchValue)
            );
        }
        navigate('/results', { state: { results } });
        setShowDialog(false); // Close dialog after search
    };

    // const handleLogout = () => {
    //     navigate('/');
    // };

    const toggleDialog = () => {
        setShowDialog(prev => !prev); // Toggle dialog visibility
    };

    return (
        <div className="App">

            <Navigation/>

            <div className='container'>
                

                <div className='main'>
                    <Top />
                </div>

                {/* Dialog Popup */}
                <Dialog open={showDialog} onClose={toggleDialog}>
                    <DialogTitle>Search Employees</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchValue}
                            onChange={handleSearchChange}
                            size="small"
                            fullWidth
                        />
                        <FormControl component="fieldset" style={{ marginTop: '1rem' }}>
                            <RadioGroup
                                row
                                value={searchOption}
                                onChange={handleOptionChange}
                            >
                                <FormControlLabel
                                    value="fname"
                                    control={<Radio />}
                                    label="Employee Name"
                                />
                                <FormControlLabel
                                    value="emp-id"
                                    control={<Radio />}
                                    label="Employee ID"
                                />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={toggleDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSearch} color="primary">
                            Search
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Home;
