import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import CardItemEx from '../Components/CardItemEx'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="HomePage slide-in-top">
        <Navbar history={this.state.history} />
        <div className="HomePageContent text-left">
          <div className="row">
            <div className="col-5">
              <Title title1="Brian Lynch"
                subtitle="4th Year computer science student in Trinity College Dublin and Full time Web Developer.">
              </Title>
            </div>
            <div className="col-1"></div>
            <div className="col-5 fullHeight">
            <div className="row ">
            <CardItems title1="About" title2="Me" link="about-me" style="card Card-red" icon="faUser"></CardItems>
            <CardItems title1="My" title2="Portfolio" link="portfolio" style="card Card-green"icon="faLaptopCode"></CardItems>
            </div>
            <div className="row">
            <CardItemEx title1="My" title2="Github" link="http://www.github.com/brianlunch" style="card Card-yellow" icon="faGithub"></CardItemEx>
            <CardItems title1="My" title2="CV" link="cv" style="card Card-blue" icon="faFileAlt"></CardItems>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
