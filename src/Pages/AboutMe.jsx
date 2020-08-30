import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Pic from '../pp.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Carousel from '../Components/Carousel';
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
                    <div className="col-sm-12 col-lg-3 text-left ">
                            <br></br>
                            <img className="brianPic" src={Pic} />
                            
                            <div className="row text-center ">
                            <div className="zoom col-4 text-right">
                  <a target="_blank" href="http://www.github.com/brianlunch">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faGithub} /></h1>
                  </a>
                </div>
                <div className="zoom col-4">
                  <a target="_blank" href="http://www.instagram.com/brianlunchh">
                    <h1 className="text-green"><FontAwesomeIcon icon={faInstagram} /></h1>
                  </a>
                </div>
                <div className="zoom col-4 text-left">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">

                <h1 className="text-red"><FontAwesomeIcon icon={faLinkedin} /></h1>
                  </a>
                </div>
                </div>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                    <br></br>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
