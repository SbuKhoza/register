
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='container'>

  <header>
    <div className='logo'>
      <img src='logo.png' alt='Logo'/>
    </div>
  </header>

    <nav>



<div className='menu'>

<ul>
  <li><a href="home">Home</a></li>
</ul>

</div>

<input type="text" placeholder='...Search'></input>

<div className='menu2'>

  <ul>
    <li><a href="home">Register</a></li>
    </ul>

    </div>

    </nav>

    <div className='emp'

      <form className='employee'>
        <label for='name'>First Name:</label><br></br>
        <input type='text' id='name' name='name'></input>
        <label for='sname'>Sur Name:</label><br></br>
        <input type='text' id='sname' name='sname'></input>
        <label for='email'>Email:</label><br></br>
        <input type='text' id='email' name='email'></input>


      </form>



  </div> 
        
  </div>
  );
}

export default App;
