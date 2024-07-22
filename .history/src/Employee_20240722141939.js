import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Employee.css';

function Employee() {
    // Sample data, replace with actual data
    const employees = [
        { id: 1, name: 'John', sname: 'Doe', email: 'john.doe@example.com', phone: '0123456789', idnum: '1234567890123' },
        // Add more employee objects
    ];

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    return (
        <div className="Employee">
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>ID Number</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td onClick={() => handleEdit(employee.id)}>{employee.name}</td>
                            <td>{employee.sname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.idnum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;
