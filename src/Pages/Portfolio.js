import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../Components/Navbar'
import PortfolioItem from '../Components/PortfolioItem'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Portfolio extends Component {
  constructor(props) {
    super(props)
    
    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="portfolio slide-in-fwd-center">
          <Navbar history={this.state.history}></Navbar>
          <div className ="portfolioContent">
          <h1>My Portfolio</h1><br></br><br></br>
          <div className ="row">
          
<div className="col-sm-12 col-lg-5">
<a target="_blank" href="https://www.e-menu.ie">
<PortfolioItem 
style="text-blue"
title="e-menu" 
subtitle="A contactless menu platform that helps halt the spread of Covid19 using QR codes and NFC tags.">
</PortfolioItem>
</a>
<PortfolioItem 
style="text-blue"
title="TCDexams" 
subtitle="A website in which students can view
          past Trinity papers in a more accessible format than TCDs current website.">
</PortfolioItem>
<a target="_blank" href="https://brianlunch.github.io/social-cipher/#/">
<PortfolioItem 
style="text-red"
title="Social Cipher" 
subtitle="A secure social media that encrypts all posts and only allows memebers of your group to view your posts">
</PortfolioItem>
</a>
</div>
<div className="col-lg-2"></div>
<div className="col-sm-12 col-lg-5">
<a target="_blank" href="https://isobelm.github.io/Software-Engineering/#/">
<PortfolioItem 
style="text-green"
title="Wikidata Live" 
subtitle="A website in which researchers can view changes to the Wikidata API in real time.">
</PortfolioItem>
</a>
<a target="_blank" href="https://www.brianlynch.xyz">
<PortfolioItem 
style="text-yellow"
title="Personal CV sites" 
subtitle="A website for people to place their CV and their links to their socials. Useful for internship applications.">
</PortfolioItem>
</a>
<PortfolioItem 
style="text-red"
title="Your Future Website?" 
subtitle="Contact me if you are interested in me building a website for you or your company!">
</PortfolioItem>


</div>    
</div>
</div>
          
        </div>
    )
  }
}

export default Portfolio
