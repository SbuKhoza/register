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
                    <input type='text' id='phone' name='phone'></input>
                    <input type='text' id='idnum
                <input type="submit" value="Submit"/>
            </form>

            <p>Your data has been successfully submitted!</p>

            <button onClick={() => window.location.reload()}>Clear Form</button>


        </div>

     );
}
 
export default Form;