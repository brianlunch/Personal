import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import CardItemEx from '../Components/CardItemEx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history,
      colour: "0"
    }
  }

  changeColour = () => {
    if (this.state.colour = "1") {
      this.setState({
        colour: "0"
      })
    }
  }
  changeColour2 = () => {
    if (this.state.colour = "0") {
      this.setState({
        colour: "1"
      })
    }
  }

  render() {


    var a = this.state.colour;

    return (

      <div className="HomePage slide-in-top">

        <Navbar history={this.state.history} />
        <div className="HomePageContent text-left">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-5 col-md-5">
              <br></br>
              <Title title1="Brian Lynch"
                subtitle="4th Year computer science student in Trinity College Dublin.">
              </Title>
              <br></br><br></br>
              <div className="row text-center ">
                <div className="zoom col-4 text-right">
                  <a target="_blank" href="http://www.github.com/brianlunch">
                    {a == "1" ? <h1 className=" text-black"><FontAwesomeIcon icon={faGithub} /></h1> : <h1 className="text-blue"><FontAwesomeIcon icon={faGithub} /></h1>}
                  </a>
                </div>
                <div className="zoom col-4">
                  <a target="_blank" href="http://www.instagram.com/brianlunchh">
                    {a == "1" ? <h1 className="text-black"><FontAwesomeIcon icon={faInstagram} /></h1> : <h1 className="text-green"><FontAwesomeIcon icon={faInstagram} /></h1>}
                  </a>
                </div>
                <div className="zoom col-4 text-left">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">

                    {a == "1" ? <h1 className="text-black"><FontAwesomeIcon icon={faLinkedin} /></h1> : <h1 className="text-red"><FontAwesomeIcon icon={faLinkedin} /></h1>}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-sm-12 col-lg-5 col-md-5 fullHeight">
              <div className="row justify-content-center">
                {a == "1" ? <CardItems title1="About" title2="Me" link="about-me" style="card zoom Card-black" icon="faUser"></CardItems> : <CardItems title1="About" title2="Me" link="about-me" style="card zoom Card-red" icon="faUser"></CardItems>}
                {a == "1" ? <CardItems title1="My" title2="Portfolio" link="portfolio" style="card zoom Card-black" icon="faLaptopCode"></CardItems> : <CardItems title1="My" title2="Portfolio" link="portfolio" style="card zoom Card-blue" icon="faLaptopCode"></CardItems>}

              </div>
              <div className="row justify-content-center">
                {a == "1" ?
                  <div className="card zoom Card-black">
                    <a onClick={this.changeColour} target="_blank" href={this.props.link}>
                      <div onClick={this.changeColour} class="card-body text-center" >
                        <h3 class="card-title">Add</h3>
                        <h3 class="card-title">Colour</h3>
                        <h3><FontAwesomeIcon icon={faPalette} /></h3>
                      </div>
                    </a>
                  </div> : <div className="card zoom Card-green">
                    <a onClick={this.changeColour2} target="_blank" href={this.props.link}>
                      <div onClick={this.changeColour} class="card-body text-center" >
                        <h3 class="card-title">Remove</h3>
                        <h3 class="card-title">Colour</h3>
                        <h3><FontAwesomeIcon icon={faPalette} /></h3>
                      </div>
                    </a>
                  </div>
                }
                {a == "1" ? <CardItems title1="My" title2="CV" link="cv" style="card zoom Card-black" icon="faFileAlt"></CardItems> : <CardItems title1="My" title2="CV" link="cv" style="card zoom Card-yellow" icon="faFileAlt"></CardItems>}


              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
