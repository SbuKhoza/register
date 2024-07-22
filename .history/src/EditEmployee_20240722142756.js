import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditEmployee.css';

function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '', sname: '', email: '', phone: '', idnum: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = storedEmployees[id];
        if (employee) {
            setFormData(employee);
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'First name is required';
        if (!formData.sname) errors.sname = 'Last name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^0\d{9}$/.test(formData.phone) && !/^27\d{9}$/.test(formData.phone)) {
            errors.phone = 'Phone number must start with "0" or "27" and be followed by 9 digits';
        }
        if (!formData.idnum) {
            errors.idnum = 'ID number is required';
        } else if (!/^\d{13}$/.test(formData.idnum)) {
            errors.idnum = 'ID number must be exactly 13 digits';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
            storedEmployees[id] = formData;
            localStorage.setItem('employees', JSON.stringify(storedEmployees));
            navigate('/employees');
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="edit-employee">
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>First Name:</label><br></br>
                <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} /><br></br>
                {errors.name && <span className="error">{errors.name}</span>}<br></br>

                <label htmlFor='sname'>Last Name:</label><br></br>
                <input type='text' id='sname' name='sname' value={formData.sname} onChange={handleChange} /><br></br>
                {errors.sname && <span className="error">{errors.sname}</span>}<br></br>

                <label htmlFor='email'>Email:</label><br></br>
                <input type='text' id='email' name='email' value={formData.email} onChange={handleChange} /><br></br>
                {errors.email && <span className="error">{errors.email}</span>}<br></br>

                <label htmlFor='phone'>Phone number:</label><br></br>
                <input type='text' id='phone' name='phone' value={formData.phone} onChange={handleChange} /><br></br>
                {errors.phone && <span className="error">{errors.phone}</span>}<br></br>

                <label htmlFor='idnum'>ID Number:</label><br></br>
                <input type='text' id='idnum' name='idnum' value={formData.idnum} onChange={handleChange} /><br></br>
                {errors.idnum && <span className="error">{errors.idnum}</span>}<br></br>

                <button type="submit" value="Submit">SAVE</button>
            </form>
        </div>
    );
}

export default EditEmployee;
