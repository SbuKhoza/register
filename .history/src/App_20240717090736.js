
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav>

        <div className='logo'>
          <img src='logo.png' alt='Logo'/>
        </div>

        <div className='hom'>

        <ul>
          <li><a href="home">Home</a></li>
        </ul>

        

        <input type="text" placeholder='...Search'></input>

        <div className='reg'>

        <ul>
          <li><a href="home">Register</a></li>
        </ul>

        </div>  

      </nav>
      
    </div>
  );
}

export default App;
