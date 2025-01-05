Employee Management Application
This is a simple React-based Employee Management Application for administrators to manage employees efficiently. The application allows the user to log in, view employees, search for employees, register new employees, and perform updates or deletions on employee records.

Features
Admin Login: Secure login system with predefined credentials.
Employee Management:
Add Employee: Register new employees with their details.
View Employees: Browse the list of existing and former employees.
Search Employees: Quickly find employees using the search functionality.
Update Employee: Modify existing employee details.
Delete Employee: Remove employee records from the system.
User-friendly Interface: Intuitive design for seamless navigation.
Prerequisites
Node.js: Ensure you have Node.js installed (>= v16).
npm or yarn: A package manager to install dependencies.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/employee-management.git
cd employee-management
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
User Login Credentials:
Email: malloya@gmail.com
Password: 123456
Navigating the App:
Open the app in your browser at http://localhost:3000.
Use the provided login credentials to access the admin dashboard.
Features to explore:
Add, update, or delete employee records.
Search employees by name or employee ID.
View active and former employee records.
Folder Structure
src/: Contains the main application files.
components/: Reusable components like forms and navigation.
App.js: Main entry point for the React application.
Home.js: Admin dashboard with search, add, update, and delete functionality.
Login.js: Login page for administrators.
Employee.js: Employee list view.
FEmployee.js: View for former employees.
Key Technologies
React: Frontend framework.
React Router: Navigation and routing.
Material-UI: Dialogs and UI components.
CSS Modules: Styling for components.
Scripts
Start Development Server:

bash
Copy code
npm start
Build Production Files:

bash
Copy code
npm run build
Run Tests:

bash
Copy code
npm test
Visual Overview
Dashboard Preview
For a visual reference, please see the Readme.png image located in the repository root folder. It provides an overview of the app’s interface and key features.

Known Issues
The application currently lacks a backend server. All data and authentication logic are stored locally within the application.