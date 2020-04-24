import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLink, faUser, faFileAlt, faLaptopCode} from '@fortawesome/free-solid-svg-icons'

//This class takes in a title and a description and displays them as shown on the homepage


class CardItems extends Component {
    render() {
        const a =this.props.icon;
        return (
            
            <div className={this.props.style}>
            <Link to={this.props.link}>
                        <div class="card-body text-center" >
                            <h3 class="card-title">{this.props.title1}</h3>
                            <h3 class="card-title">{this.props.title2}</h3>
                                {a=="faUser"? <h3><FontAwesomeIcon icon={faUser}/></h3> : null}
                                {a=="faFileAlt"? <h3><FontAwesomeIcon icon={faFileAlt}/></h3> : null}
                                {a=="faLaptopCode"? <h3><FontAwesomeIcon icon={faLaptopCode}/></h3> : null}
                                {a=="faGithub"? <h3><FontAwesomeIcon icon={faGithub}/></h3> : null}
                        </div>
                        
                </Link>
            </div>
        
        );
    }
}

export default CardItems;
