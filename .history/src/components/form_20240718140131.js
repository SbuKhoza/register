const Form = () => {
    return ( 
        <div className="r-form">

            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input type="submit" value="Submit" />
            </form>

            <p>Your data has been successfully submitted!</p>

            <button onClick={() => window.location.reload()}>Clear Form</button>

        </div>

        </div>

     );
}
 
export default Form;