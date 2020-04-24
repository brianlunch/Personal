import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CVwebsite from '../CVwebsite.gif'
import SocialCipher from '../SocialCipher.gif'
import TCDexams from '../TCDexams.gif'
import Question from '../Question.png'
import Wikidata from '../Wikidata.gif'
//This class takes in a title and a description and displays them as shown on the homepage


class PortfolioItem extends Component {
    render() {
        const a = this.props.icon;
        return (
            <div className="portfolioItem text-left">


                <h2 className={this.props.style}>{this.props.title}</h2>
                <p>{this.props.subtitle}</p>
                {this.props.title == "Personal CV sites"?<img className="gif" src={CVwebsite}/>:null}
                {this.props.title == "Social Cipher"?<img className="gif" src={SocialCipher}/>:null}
                {this.props.title == "TCDexams"?<img className="gif" src={TCDexams}/>:null}
                {this.props.title == "Wikidata Live"?<img className="gif" src={Wikidata}/>:null}
                {this.props.title == "Your Future Website?"?null:null}
                <br></br><br></br><br></br><br></br>


            </div>
        );
    }
}

export default PortfolioItem;
