import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
//hooks
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//icons




/*
    To do on nav - pass in signed in user 
    - change navbar items based on if logged in or not
    - (logout / login) etc.
*/

const Nav = ({user}) => {

    const [collapsed, toggleCollapsed] = useState(true)
    const [classOne, setClassOne] = useState('collapse navbar-collapse')
    const [classTwo, setClassTwo] = useState ('navbar-toggler navbar-toggler-right collapsed')
    const [classThree, setClassThree] = useState('navbar navbar-expand-lg fixed-top py-3')

    async function toggleNavbar(){
        await toggleCollapsed(!collapsed)
        const classOneUpdated = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwoUpdated = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        setClassOne(classOneUpdated)
        setClassTwo(classTwoUpdated)
    }

    useScrollPosition(
        ({ prevPos, currPos }) => {
          if (currPos.y<-10){
            setClassThree('navbar navbar-expand-lg fixed-top py-3 active ')
          }else{
            setClassThree('navbar navbar-expand-lg fixed-top py-3')
          }
        },
      )

    
    return (
    <nav className={classThree}>
        <div className="container">
            
            <button  onClick={toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration= {500}
                            >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                            activeClass="active"
                            to="CV"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >
                            CV
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            >
                            Contact
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;