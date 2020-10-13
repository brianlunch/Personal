// libraries
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './PortfolioItem.css'
import Portfolio from '../Portfolio/Portfolio'

const PortfolioItem = ({title, description, video}) => {
    return(
        
            <div className="item" id="portfolioItem">
     <div className="row text-left">
         <div className="col-lg-6 col-md-6 col-sm-12 col-12">
         <h2>{title}</h2>
         <p>{description}</p>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12col-12">
         <img className="gif" src={video}/>
         </div>
    
    </div>           

            </div>
    )
}

export default PortfolioItem;