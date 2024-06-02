import "./Contact.css";

function Contact(){
    return(
        <div className="contacts" style={{ "background-color": "rgb(33, 33, 33)"}}>
            <div className="contacts-container">
            <h1 style={{"color": "rgb(245, 101, 57)"}}>Contacts</h1>
            <div className="contacts-body">
                <div className="contacts-form">
                    <form>
                        <div className="input-container">
                            <label for="Name" className="jss441">Name</label>
                            <input type="text" placeholder="Harsh Verma" name="Name" className="form-input jss439"></input>
                        </div>
                        <div className="input-container">
                            <label for="Email" className="jss441">Email</label>
                            <input type="email" placeholder="harsh.verma1503@gmail.com" className="form-input jss439"></input>
                        </div>
                        <div className="input-container">
                            <label for="Message" className="jss441">Message</label>
                            <textarea placeholder="Type your message..." type="text" name="Message" className="form-message jss440"></textarea>
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="jss444">
                                <p>Send</p>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contacts-details">

                  
                    
                </div>
                <img src="https://dev-portfolio-template.netlify.app/static/media/contactsOrange.75754594.svg" alt="contacts" class="contacts--img"></img>
            </div>
        </div>
        </div>
    )
}
export default Contact;