import './Home.css';

function Home() {
    return (
        <div className="App">
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <img src='logo.png' alt='logo'/>
                    </div>

                    <div className='search'>
                        <input type='text' placeholder='Search...' id></input>
                    </div>

                    <div className='logout'>
                        <button type='button' className='btn'>Log out</button>
                    </div>

                    <div className='profile'>
                        <img src='user.png' alt='profile'></img>
                    </div>

                </nav>

                <div className='nav2'>
                    
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