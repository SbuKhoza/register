import '../FEmployee.css';
import { useEffect, useState } from 'react';
import { Restore as RestoreIcon, Delete as DeleteIcon } from '@mui/icons-material';

function Fempl() {
    const [formerEmployees, setFormerEmployees] = useState([]);

    useEffect(() => {
        const storedFormerEmployees = JSON.parse(localStorage.getItem('formerEmployees')) || [];
        setFormerEmployees(storedFormerEmployees);
    }, []);

    const handlePermanentlyDelete = (index) => {
        const updatedFormerEmployees = [...formerEmployees];
        updatedFormerEmployees.splice(index, 1);
        setFormerEmployees(updatedFormerEmployees);
        localStorage.setItem('formerEmployees', JSON.stringify(updatedFormerEmployees));
    };

    const handleRestore = (index) => {
        const restoredEmployee = formerEmployees[index];
        const updatedFormerEmployees = [...formerEmployees];
        updatedFormerEmployees.splice(index, 1);
        setFormerEmployees(updatedFormerEmployees);
        localStorage.setItem('formerEmployees', JSON.stringify(updatedFormerEmployees));

        let currentEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        currentEmployees.push(restoredEmployee);
        localStorage.setItem('employees', JSON.stringify(currentEmployees));
    };

    return (
        <div className="FEmployee">
            <h2>Former Employees List</h2>
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
                    {formerEmployees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.sname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.idnum}</td>
                            <td>
                                <RestoreIcon className="restore-icon" onClick={() => handleRestore(index)} />
                                <DeleteIcon className="delete-icon" onClick={() => handlePermanentlyDelete(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Fempl;