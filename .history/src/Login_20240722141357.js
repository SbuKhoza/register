import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

       
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'malloya@gmail.com' && password === '123456') {
  
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="Login">
            <div className="fcontainer">
                <form onSubmit={handleSubmit}>
                    <h2>Admin Login</h2><br></br>
                    <img src="boy.png" alt='user'></img><br
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
