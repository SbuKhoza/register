import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const initialEmployees = [
  { id: '123', name: 'John', surname: 'Doe', age: 30, role: 'Developer', photo: 'link-to-photo' },
  { id: '456', name: 'Jane', surname: 'Smith', age: 25, role: 'Designer', photo: 'link-to-photo' }
];

function ViewEmploy() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchId, setSearchId] = useState('');

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleSearch = () => {
    if (searchId) {
      setEmployees(initialEmployees.filter(emp => emp.id === searchId));
    } else {
      setEmployees(initialEmployees);
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h5" gutterBottom>View Employees</Typography>
      <Box display="flex" alignItems="center" gap={2} marginBottom={2}>
        <TextField label="Search by ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.surname}</TableCell>
              <TableCell>{emp.age}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>
                <IconButton color="primary"><Edit /></IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(emp.id)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ViewEmploy;
