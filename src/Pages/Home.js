// libraries
import React from 'react'
import Nav from '../components/transparent-nav/Navbar';
import Header from '../components/Header/Header'
import CV from '../components/CV/CV'
import Contact from '../components/Contact/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from '../components/Portfolio/Portfolio';




const Home = (props) => {
    return(
        
            <div>
                <Nav/>
                   <Header/>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 122">
  <path fill="#71c7c5" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,160C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
                    <CV id="#cv"></CV>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 130"><path fill="#71c7c5" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                    
                    <div className="bg-funky">
                    <Portfolio className="bg-white"/>
                    
                    <Contact  className="bg-white"  ></Contact>
                    </div>
                    
 
            </div>
    )
}

export default Home;