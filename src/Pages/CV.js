// libraries
import React from 'react'
import Nav from '../components/transparent-nav/Navbar';
import './CVpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CVimg from '../cv.jpg'
import CVBrianLynch from '../cv.pdf'
import Button from '../components/Button/Button'




const CV = (props) => {
    return(
        
            <div>
                <Nav/>

                   <div className="cvPage justify-content-center row">
                    <div className="col-lg-9 col-md-11 col-12">
                    <img className= "image" src={CVimg}/>
                    </div>
                   </div>
<a target="_blank" href={CVBrianLynch} ><Button text="View PDF File" style="alt"/></a>
                    
 
            </div>
    )
}

export default CV;