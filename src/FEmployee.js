import React from 'react';
import './Home.css';
import Fempl from './components/Fempl';
import Navigation from './components/Navigation';
// import { useNavigate } from 'react-router-dom';

function FEmployee() {
    

    return (
        <div className="App">
            <div className='container'>
                <Navigation/>

                <div className='main'>
                    <Fempl/>
                    
                </div>
            </div>
        </div>
    );
}

export default FEmployee;

