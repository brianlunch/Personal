// libraries
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
    return(
        
            <div  id="home">
                
                <div className ="row Header">
                    <div className="col-12 title">
                    <h1 className="display-1">Brian Lynch</h1>
                    <h2>Final Year Computer Science Student</h2>

                    <a target="_blank"  className="socials " href="https://www.linkedin.com/in/brian-lynch-8a1095155/">
                  <FontAwesomeIcon className="zoom" icon={faLinkedinIn} />
               </a>
               <a target="_blank" className="socials ig" href="mailto:brianlynch182@gmail.com">
                  <FontAwesomeIcon className="zoom" icon={faEnvelope} />
               </a>
               <a target="_blank" className="socials " href="https://www.github.com/brianlunch">
                  <FontAwesomeIcon className="zoom" icon={faGithub} />
               </a>
                    </div>
                
                

            </div>
                

            </div>
    )
}

export default Header;