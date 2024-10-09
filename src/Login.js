import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.username.value;
        const password = event.target.password.value;

        try {
            // Sign in with Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Get ID token
            const idToken = await user.getIdToken();

            // Optionally, send ID token to backend for further verification or session management
            // Example: const response = await axios.post('/api/auth/login', { token: idToken });

            // Navigate to home after successful login
            navigate('/home');
        } catch (err) {
            setError('Invalid credentials');
            console.error(err);
        }
    };

    return (
        <div className="Login">
            <div className="fcontainer">
                <form onSubmit={handleSubmit}>
                    <h2>Admin Login</h2><br></br>
                    <img src="boy.png" alt='user'></img><br></br>
                    <label htmlFor='username'>User email</label><br></br>
                    <input type='email' id='username' name='username' placeholder='Enter your user email' required></input><br></br>
                    <label htmlFor='password'>Password</label><br></br>
                    <input type='password' id='password' name='password' placeholder='Enter Password' required></input><br></br>
                    <button type='submit'>Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
