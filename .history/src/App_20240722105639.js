import './App.css';
import Home from './Home';
import Login from './Login';
iport
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/Employee" element={<Employee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
