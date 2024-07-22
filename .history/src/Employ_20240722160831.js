import './Employee.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Employ() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleDelete = (index) => {
        const updatedEmployees = [...employees];
        const [deletedEmployee] = updatedEmployees.splice(index, 1);
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        let formerEmployees = JSON.parse(localStorage.getItem('formerEmployees')) || [];
        formerEmployees.push(deletedEmployee);
        localStorage.setItem('formerEmployees', JSON.stringify(formerEmployees));
    };

    const handleEdit = (index) => {
        navigate(`/edit-employee/${index}`);
    };

    return (
        <div className="Employee">
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>ID Number</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td onClick={() => handleEdit(index)}>{employee.name}</td>
                            <td>{employee.sname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.idnum}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employ;
