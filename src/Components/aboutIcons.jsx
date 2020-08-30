import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic from '../pp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faFutbol, faGraduationCap, faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons'

//This class takes in a title and a description and displays them as shown on the homepage


class aboutIcons extends Component {
    render() {
        const a =this.props.icon;
        return (
            <div>
            <div className="row justify-content-center">

            <div className="col-4 text-center thirds">
                <div className="icon"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></div>
            </div>

        </div>
        <div className="row">
            <div className="col-4 text-right picDiv">
                <div className="iconSide text-red"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></div>
            </div>
            <div className="col-4 text-center picDiv">

                <img className="brianPic" src={Pic} />

            </div>
            <div className="col-4 text-left picDiv">
                <div className="iconSide text-blue"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></div>
            </div>
        </div>
        <div className="row justify-content-center">
            
            <div className="col-4 text-center thirds">
            <div className="iconBottom text-green"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></div>
            </div>
            
        </div>
        </div>
        );
    }
}

export default aboutIcons;
