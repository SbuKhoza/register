import './FEmployee.css';
import { useEffect, useState } from 'react';

function Fempl() {
    const [formerEmployees, setFormerEmployees] = useState([]);

    useEffect(() => {
        const storedFormerEmployees = JSON.parse(localStorage.getItem('formerEmployees')) || [];
        setFormerEmployees(storedFormerEmployees);
    }, []);

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
                     </tr>
                  ))}
              </tbody>
         </table>
     </div>
 );
};

export default Fempl;