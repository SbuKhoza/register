import './Form.css'

const Form = () => {
    return ( 
        <div className="r-form">

            <form>
            <label for='name'>First Name:</label><br></br>
                    <input type='text' id='name' name='name'></input><br></br>
                    <label for='sname'>Sur Name:</label><br></br>
                    <input type='text' id='sname' name='sname'></input><br></br>
                    <label for='email'>Email:</label><br></br>
                    <input type='text' id='email' name='email'></input><br></br>
                    <label for='phone'>Phone numper:</label><br></br>
                    <input type='text' id='phone' name='phone'></input><br></br>
                    <label for='idnum'>ID Number:</label><br></br>
                    <input type='text' id='idnum' name='idnum'></input><br></br>
                    <button type='submit' value={Sub}
                    <input type="submit" value="Submit"/>

                
            </form>

            <button onClick={() => window.location.reload()}>Clear Form</button>


        </div>

     );
}
 
export default Form;