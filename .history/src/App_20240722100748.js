
import './App.css';
import Home from './Home';
import Login from './Login';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Home />} />

      </Routes>
     
     </BrowserRouter>
     
     

     </div> 
    
        
  
  );
}

export default App;
