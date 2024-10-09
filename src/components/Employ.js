import '../Employee.css';
import { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

function Employ() {
    const [employees, setEmployees] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState('');

    const auth = getAuth();

    const fetchEmployees = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const idToken = await user.getIdToken();
                const response = await axios.get('http://localhost:5000/api/employees', {
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                });
                setEmployees(response.data);
            }
        } catch (err) {
            setError('Failed to fetch employees');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    // ... rest of the component remains similar, but replace localStorage operations with API calls

    // Handle deletion of an employee
    const handleDelete = async (id) => {
        try {
            const user = auth.currentUser;
            if (user) {
                const idToken = await user.getIdToken();
                await axios.delete(`http://localhost:5000/api/employees/${id}`, {
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                });
                fetchEmployees(); // Refresh the list
            }
        } catch (err) {
            setError('Failed to delete employee');
            console.error(err);
        }
    };

    // Open the edit dialog
    const handleOpenEdit = (employee) => {
        setCurrentEmployee(employee);
        setOpen(true);
    };

    // Save the updated employee information
    const handleSaveEdit = async () => {
        try {
            const user = auth.currentUser;
            if (user && currentEmployee.id) {
                const idToken = await user.getIdToken();
                await axios.put(`http://localhost:5000/api/employees/${currentEmployee.id}`, currentEmployee, {
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                });
                setOpen(false);
                fetchEmployees();
            }
        } catch (err) {
            setError('Failed to update employee');
            console.error(err);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setCurrentEmployee({
            ...currentEmployee,
            [e.target.name]: e.target.value,
        });
    };

    // Handle image click to enlarge
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setImageModalOpen(true);
    };

    // Close image modal
    const handleImageModalClose = () => {
        setImageModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="FEmployee">
            <h2>Employee List</h2>
            {error && <p className="error">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>ID Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                {employee.image && (
                                    <img
                                        src={employee.image}
                                        alt={`${employee.name} ${employee.sname}`}
                                        width="50"
                                        height="50"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleImageClick(employee.image)}
                                    />
                                )}
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.sname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.idnum}</td>
                            <td>
                                <EditIcon className="edit-icon" onClick={() => handleOpenEdit(employee)} />
                                <DeleteIcon className="delete-icon" onClick={() => handleDelete(employee.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MUI Dialog for editing employee */}
            {currentEmployee && (
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Edit Employee</DialogTitle>
                    <DialogContent>
                        {/* Handle image upload if needed */}
                        <TextField
                            margin="dense"
                            label="First Name"
                            name="name"
                            value={currentEmployee.name || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Last Name"
                            name="sname"
                            value={currentEmployee.sname || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            name="email"
                            value={currentEmployee.email || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            name="phone"
                            value={currentEmployee.phone || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ID Number"
                            name="idnum"
                            value={currentEmployee.idnum || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Role"
                            name="role"
                            value={currentEmployee.role || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
                        <Button onClick={handleSaveEdit} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            )}

            {/* Image Enlargement Dialog */}
            <Dialog open={imageModalOpen} onClose={handleImageModalClose}>
                <DialogTitle>Employee Image</DialogTitle>
                <DialogContent>
                    {selectedImage && (
                        <img src={selectedImage} alt="Enlarged Employee" style={{ width: '100%', height: 'auto' }} />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleImageModalClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Employ;
