import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'


//This class takes in a title and a description and displays them as shown on the homepage


class CardItemEx extends Component {
    render() {
        const a =this.props.icon;
        return (
            
            <div className={this.props.style}>
            <a onClick={this.changeColour} target="_blank" href={this.props.link}>
                        <div onClick={this.changeColour} class="card-body text-center" >
                            <h3 class="card-title">{this.props.title1}</h3>
                            <h3 class="card-title">{this.props.title2}</h3>
                                {a=="faGithub"? <h3><FontAwesomeIcon icon={faGithub}/></h3> : null}
                        </div>
                        
                </a>
            </div>
        
        );
    }
}

export default CardItemEx;
