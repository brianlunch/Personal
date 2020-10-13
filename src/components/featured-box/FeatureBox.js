import React from 'react'
import './FeatureBox.css'
const FeatureBox = ({icon,title,text}) =>  {

   return (
      <div className = "featureBox">      
         <h1>{icon}</h1>                      
         <p class="text">{title}</p>
         
      </div>
                     
   )
}
export default FeatureBox