import './Login.css';
import

function Login() {
    return (
    <div className="Login">
    <div className="fcontainer">

    <form>
    <h2>Admin Login</h2><br></br>
    <label for='username'>User email</label><br></br>
    <input type='email' id='username' name='username' placeholder='Enter your user email' required></input><br></br>
    <label for='password'>Password</label><br></br>
    <input type='password' id='password' name='password' placeholder='Enter Password' required></input><br></br>
    <button type='submit'>Login</button>
    </form>
    </div>
  
       </div> 
      
          
    
    );
  };

export default Login;