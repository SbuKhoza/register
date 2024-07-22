import React, { useState } from 'react';
import './Home.css';
import Form from './Form';
import Employee from './Employee';




function Home() {
    const [searchOption, setSearchOption] = useState('fname');
    const [searchValue, setSearchValue] = useState('');

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
        
        console.log(`Searching for ${searchValue} by ${searchOption}`);
        
    };

    return (
        <div className="App">
            <div className='container'>
                <div className='heading'>
                    <nav>
                        <div className='logo'>
                            <img src='logo.png' alt='logo'></img>
                        </div>

                        <div className='search'>
                            <input type='text' placeholder='Search...' id='search'
                                value={searchValue}
                                onChange={handleSearchChange}
                            ></input> 
                            <div className='rad'>
                                <input
                                    type='radio'
                                    id='nam'
                                    name='searchOption'
                                    value='fname'
                                    checked={searchOption === 'fname'}
                                    onChange={handleOptionChange}
                                ></input>
                                <label htmlFor='nam'>Employee Name</label>
                                <input
                                    type='radio'
                                    id='eid'
                                    name='searchOption'
                                    value='emp-id'
                                    checked={searchOption === 'emp-id'}
                                    onChange={handleOptionChange}
                                ></input>
                                <label htmlFor='eid'>Employee ID</label>
                            </div>
                            
                        </div>

                        <div className='logout'>
                            <button type='button' className='btn'>Log out</button>
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
                        <button type='button' className='btn'>Dashboard</button>
                        <button type='button' className='btn'>Employees</button>
                        <button type='button' className='btn'>Former Employees</button>
                    </div>
                </div>

                <div className='main'>
                    <Employee/>
                    
                </div>    
            </div>
        </div> 
    );
};

export default Home;
