// libraries
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './PortfolioItem.css'
import Portfolio from '../Portfolio/Portfolio'

const PortfolioItem = ({title, description, video, link}) => {




    return(
        
            <div className="item" id="portfolioItem">
     <div className="row text-left">
         <div className="col-lg-6 col-md-6 col-sm-12 col-12">
         <a target="_blank" href={link}><h2>{title}</h2></a>
         <p className="displayBreak">{description}</p>
         
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12col-12 imgCol">
         <a target="_blank" href={link}><img className="gif" src={video}/></a>
         </div>
    
    </div>           

            </div>
    )
}

export default PortfolioItem;