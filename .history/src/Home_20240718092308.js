import './Home.css';

function Home() {
    return (
        <div className="App">
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <img src='logo.png' alt='logo'/>
                    </div>

                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>

                    <div className='search'>
                        <input type='text' placeholder='Search'/>
                        <button>Search</button>
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