import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';

import Login from './Login';
import Employee from './Employee';
import FEmployee from './FEmployee';
import Top from './Top';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewEmployees from './ViewEmployees';
import Profile from './Profile';
import ManageAdmin from './ManageAdmin';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/manageadmin" element={<ManageAdmin />} />
                    <Route path="/viewemployees" element={<ViewEmployees />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/former-employees" element={<FEmployee />} />
                    <Route path="/top" element={<Top />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
