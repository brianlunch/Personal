// libraries
import React, { useEffect, useState } from "react";
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import emenu from '../../Images/emenu.gif'
import {Button, Collapse} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Portfolio.css'
import MyCarousel from '../MyCarousel/MyCarousel'


const Portfolio = (props) => {
    const [open, setOpen] = useState(false);
    return(
        
            <div  className= "portfolio" id="portfolio">
                
                
               <div className ="row justify-content-center">
               <div className ="col-lg-9 col-sm-12 col-12 bg-white">
               <h1 className="display-1 portfolioTitle">Portfolio</h1>
               <MyCarousel></MyCarousel>
               </div>
               </div>  
                </div>
           
    )
}

export default Portfolio;