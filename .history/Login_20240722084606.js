import './Login.css';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '', email: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

<div className="fcontainer">
    <form>
    <h2>Login</h2>
    <label for='username'>User email</label>
    <input type='email' id='username' name='username' placeholder='Enter your user email' required></input>
    <label for='password'>Password</label>
    <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
    <button type='submit'>Login</button>
    </form>
</div>
