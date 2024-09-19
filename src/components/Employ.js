import '../Employee.css';
import { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

function Employ() {
    const [employees, setEmployees] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [imageModalOpen, setImageModalOpen] = useState(false); // State for image enlargement
    const [selectedImage, setSelectedImage] = useState(null);    // Store selected image for enlargement

    // Load employees from localStorage on component mount
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    // Handle deletion of an employee
    const handleDelete = (index) => {
        const updatedEmployees = [...employees];
        const [deletedEmployee] = updatedEmployees.splice(index, 1);
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Move the deleted employee to former employees
        let formerEmployees = JSON.parse(localStorage.getItem('formerEmployees')) || [];
        formerEmployees.push(deletedEmployee);
        localStorage.setItem('formerEmployees', JSON.stringify(formerEmployees));
    };

    // Open the edit dialog
    const handleOpenEdit = (index) => {
        setCurrentEmployee(employees[index]);
        setEditingIndex(index);
        setOpen(true);
    };

    // Close the edit dialog
    const handleClose = () => {
        setOpen(false);
        setCurrentEmployee(null);
        setEditingIndex(null);
    };

    // Save the updated employee information
    const handleSaveEdit = () => {
        const updatedEmployees = [...employees];
        updatedEmployees[editingIndex] = currentEmployee;
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Save the updated list
        handleClose();
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
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>
                                {employee.image && (
                                    <img
                                        src={employee.image}
                                        alt={`${employee.name} ${employee.sname}`}
                                        width="50"
                                        height="50"
                                        style={{ cursor: 'pointer' }} // Add cursor style
                                        onClick={() => handleImageClick(employee.image)} // Click to enlarge image
                                    />
                                )}
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.sname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.idnum}</td>
                            <td>
                                <EditIcon className="edit-icon" onClick={() => handleOpenEdit(index)} />
                                <DeleteIcon className="delete-icon" onClick={() => handleDelete(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MUI Dialog for editing employee */}
            {currentEmployee && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Employee</DialogTitle>
                    <DialogContent>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                        setCurrentEmployee({ ...currentEmployee, image: event.target.result });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        {currentEmployee.image && (
                            <img src={currentEmployee.image} alt="Employee" width="100" height="100" />
                        )}
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
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