import './Login.css';
function Login() {
    return (
    <div className="Login">
    <div className="fcontainer">
    <form>
    <h2>Login</h2>
    <label for='username'>User email</label>
    <input type='email' id='username' name='username' placeholder='Enter your user email' required></input>
    <label for='password'>Password</label>
    <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
    <button type='submit'>Login</button>
    </form>
</div>
  
       </div> 
      
          
    
    );
  }
  
  export default App;
  



};

export default Login;