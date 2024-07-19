import './Home.css';
import Form from './Form';
function Home() {
    return (
        <div className="App">
            <div className='container'>
                
            <div className='heading'>
                <nav>
                    <div className='logo'>
                        <img src='logo.png' alt='logo'></img>
                    </div>

                    <div className='search'>
                        <input type='text' placeholder='Search...' id='search'></input>
                        <div className='rad'>
                        <input type='radio' id='nam' name='fname' value={'fname'}></input>
                        <input type='radio' id='eid' name='emp-id' value={'emp-id'}></input>
                        </div>
                    </div>

                    <div className='logout'>
                        <button type='button' className='btn'>Log out</button>
                    </div>

                    <div className='profile'>
                        <img src='boy.png' alt='profile'></img>
                    </div>

                </nav>
            </div>
                <div className='nav2'>
                    <h1>Hi Malloya!</h1>
                    
                </div>

                <div className='nav3'>
                    <div className='dash'>
                    <button type='button' className='btn'>Dashboard</button>
                    <button type='button' className='btn'>Employees</button>
                    <button type='button' className='btn'>Former Employees</button>
                    </div>
                   

                </div>

            <main>
                <Form/>
            </main>    
                

            </div>
     
  
        </div> 
          
    
    );
  }

export default Home;