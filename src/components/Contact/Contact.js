import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Contact.css'
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
<div className="text-left">
   <div className={"contact"}>
      <div className="row justify-content-center">
      <div className ="col-lg-9 col-sm-12 col-12 bg-white">
            
            <h1 className="display-2 title text-center">Contact Me</h1>
           
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
                  : <button class="btn btn-outline-dark submit">Submit</button>}
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