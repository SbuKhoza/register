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
                    <h1>Hi Malloya!</h1>
                    
                </div>

                <div className='nav3'>
                    <div className='dash'>
                    <button type='button' className='btn'>Dashboard</button>
                    <button type='button' className='btn'>Employees</button>
                    <button type='button' className='btn'>Former Employees</button>
                    </div>
                   

                </div>

                <div className='main'>
                    <div className='cont-form'>
                        <h2>Top Performers</h2>
                        <form className='employee'>
                            <label for='name'>First Name:</label><br></br>
                            <input type='text' id='name' name='name'></input><br></br>
                            <label for='sname'>Sur Name:</label><br></br>
                            <input type='text' id='sname' name='sname'></input><br></br></
                            <label for='email'>Email:</label><br></br>
                            <input type='text' id='email' name='email'></input>
                            <label for='phone'>Phone numper:</label><br></br>
                            <input type='text' id='phone' name='phone'></input>
                        </form>    


                    </div>

                </div>


            </div>
     
  
        </div> 
          
    
    );
  }






export default Home;