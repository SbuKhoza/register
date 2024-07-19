const Form = () => {
    return ( 
        <div className="r-form">

            <form>
                
                <input type="submit" value="Submit"/>
            </form>

            <p>Your data has been successfully submitted!</p>

            <button onClick={() => window.location.reload()}>Clear Form</button>


        </div>

     );
}
 
export default Form;