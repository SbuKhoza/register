import './Login.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';  // Import the firebase auth instance

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.username.value;
        const password = event.target.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Navigate to the admin homepage on successful login
            navigate('/home');
        } catch (error) {
            alert('Invalid credentials');
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className="Login">
            <div className="fcontainer">
                <form onSubmit={handleSubmit}>
                    <h2>Admin Login</h2><br></br>
                    <img src="boy.png" alt='user'></img><br></br>
                    <label htmlFor='username'>User email</label><br></br>
                    <input type='email' id='username' name='username' placeholder='Enter your user email' required></input><br></br>
                    <label htmlFor='password'>Password</label><br></br>
                    <input type='password' id='password' name='password' placeholder='Enter Password' required></input><br></br>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
