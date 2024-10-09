import React from 'react'
import Navigation from './components/Navigation';
import './Employee.css'
import Employ from './components/Employ';

function Employee() {
  return (
    <div className='App'>
        <div className='container'>
            <Navigation/>

            <div className='main'>
                    <Employ/>
                    
            </div>
        </div>

    </div>
  )
}

export default Employee
