import './App.css';
import Home from './Home';
import Login from './Login';
import Employee from './Employee';
import FEmployee from './FEmployee';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/former-employees" element={<FEmployee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
