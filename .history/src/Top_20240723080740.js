import './Top.css';
import { useEffect, useState } from 'react';

function Top() {
    const [topEmployees, setTopEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const shuffledEmployees = storedEmployees.sort(() => 0.5 - Math.random());
        const selectedEmployees = shuffledEmployees.slice(0, 10);
        setTopEmployees(selectedEmployees);
    }, []);

    return (
        <div className="Top">
            <h2>Top Employees</h2>
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
                {topEmployees.map((employee, index) => (
                 <tr key={index}>
                 <td>{employee.name}</td>
                 <td>{employee.sname}</td>
                 <td>{employee.email}</td>
                 <td>{employee.phone}</td>
                 <td>{employee.idnum}</td>
                </tr>
            )
            )
            }
         </tbody>
     </table>
    </div>
 );
}

export default Top;
