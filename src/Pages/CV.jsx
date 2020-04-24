import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import CVimage from '../cv.png'
import CVBrianLynch from '../CVBrianLynch.pdf'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class CV extends Component {
  constructor(props) {
    super(props)
    
    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="CV slide-in-fwd-center">
          <Navbar history={this.state.history}></Navbar>
          <img className ="cvImage" src ={CVimage}/><br></br><br></br>
          <a target="_blank" href={CVBrianLynch} class="btn btn-outline-primary"><b>View PDF File</b></a>
         
          <br></br><br></br><br></br><br></br>
          
        </div>
    )
  }
}

export default CV
