import React from 'react';
import Navbar from '../Components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component{
constructor(props) {
super(props)
this.submitForm = this.submitForm.bind(this);
this.state = {
status: "",
history: this.props.history
};
}
render() {
const { status } = this.state;
return (
<div className="text-left slide-in-fwd-center">
   <Navbar history={this.state.history} />
   <div className={"contact"}>
      <div className="row justify-content-center bg-white">
         <div className="col-xs-11 col-sm-11 col-lg-8">
            <br/><br/>
            <h2 className="text-blue">Contact Me</h2>
            <p>
               If you have any questions at all please feel free to contact me here! </p>
           
            
            <form
               onSubmit={this.submitForm}
               action="https://formspree.io/myynaeaw"
               method="POST"
               >
               <div class="form-group">
                  <label>Name:</label>
                  <input className="form-control" type="text" name="name" required/>
                  
                  <label>Email:</label>
                  <input className="form-control" type="email" name="email" required />
               </div>
               <label>Message:</label>
               <textarea className="form-control" type="text" name="message" required/>
               <br/>
               <div className="text-center">
               {status === "SUCCESS" ? 
               <h5>Thank you for Contacting us!</h5>
               : <button class="btn btn-outline-primary">Submit</button>}
               {status === "ERROR" && 
               <p>Ooops! There was an error.</p>
               }
               </div>
            </form>

            
         </div>
         
      </div>
   </div>
</div>
);
}
submitForm(ev) {
ev.preventDefault();
const form = ev.target;
const data = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open(form.method, form.action);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = () => {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
form.reset();
this.setState({ status: "SUCCESS" });
} else {
this.setState({ status: "ERROR" });
}
};
xhr.send(data);
}
}
export default Contact;