import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Pic from '../skiTrip.jpg'
import { Link } from 'react-router-dom';
/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class AboutMe extends Component {
    constructor(props) {
        super(props)

        this.state = { history: this.props.history }
    }

    render() {
        return (
            <div className="aboutPageContainer slide-in-fwd-center">
                <Navbar history={this.state.history} />
                <div className="row">
                    <div className="col-5 text-left">
                        <div className="halfGrey">
                            <img className="brianPic shadow-drop-center" src={Pic} />
                        </div>
                    </div>
                    <div class="text-left col-sm-12 col-lg-6 slide-in-fwd-center">
                        <h2 className="text-blue">About Me</h2>
                        <p>I am a 4th Year Computer Science Student in Trinity College Dublin. I am originally from Aughrim, Co.Wicklow but live in Dublin during the academic year.</p>
                        <p>I have been learning web development for the last 6 years and have great experience working on numerous different projects with some great clients.</p>
                        <p>Outside of tech, I play football at a college level for trinity and love to travel!</p>
                        <p> To view a more professional summary of me, please take a look at <Link className="link" to="cv">my CV</Link> or to see previous projects check out <Link className="link" to="portfolio">my portfolio!</Link></p>
                        <br></br><h2 className="text-blue">Contact Details</h2><br></br>
                        <div className="row">
                            <div className="col-2">
                                <h5>Email: </h5>
                                <h5>Phone: </h5>
                                <h5>Location: </h5>
                            </div>
                            <div className="col-6 text-left slide-in-fwd-center">
                                <h5>BrianLynch182@gmail.com </h5>
                                <h5>+353 87 9366009 </h5>
                                <h5>Aughrim, Co.Wicklow</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
