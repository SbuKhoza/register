import './Form.css';

function Form() {
    return (
        <div className="App">
            <form className='employee'>
                <label for='name'>First Name:</label><br></br>
                <input type='text' id='name' name='name'></input><br></br>
                <label for='sname'>Sur Name:</label><br></br>
                <input type='text' id='sname' name='sname'></input><br></br>
                <label for='email'>Email:</label><br></br>
                <input type='text' id='email' name='email'></input><br></br>
                <label for='phone'>Phone numper:</label><br></br>
                <input type='text' id='phone' name='phone'></input>
            </form>  
           
        </div> 
          
    
    );
  }






export default Form;