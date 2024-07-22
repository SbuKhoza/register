import './Login.css';
function App() {
    return (
      <div className="App">
       <Home/>
       <Login/>
  
       </div> 
      
          
    
    );
  }
  
  export default App;
  

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

};

export default Login;