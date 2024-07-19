import './Home.css';

function Home() {
    return (
        <div className="App">
            <div className='container'>
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
                        <img src='user.png' alt='profile'></img>
                    </div>

                </nav>

                <div className='nav2'>
                    <h1>H</h1>
                    
                </div>

                <div className='nav3'>
                   

                </div>

                <div className='body'>
                    

                </div>


            </div>
     
  
        </div> 
          
    
    );
  }






export default Home;