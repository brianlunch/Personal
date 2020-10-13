// libraries
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeatureBox from '../featured-box/FeatureBox'
import Button from '../Button/Button'
import {faBriefcase, faFootballBall, faGraduationCap, faLaptopCode, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CVBrianLynch from '../../cv.pdf'

const CV = (props) => {
return(
<div class="CV" id="CV">
   <h1 className="CVtitle display-1">CV Highlights</h1>
   <div className ="row justify-content-center">
      <div className="col-lg-4 cold-md-6 col-12">
         <FeatureBox icon={
         <FontAwesomeIcon icon={faGraduationCap} />
         } title="I am currently on course to graduate with a distinction (1.1) from computer science in TCD. The highest grade possible!"></FeatureBox>
      </div>
      <div className="col-lg-4 cold-md-6 col-12">
         <FeatureBox icon={
         <FontAwesomeIcon icon={faUser} />
         } title="I work great under pressure, have excellent communication skills and a real team player!"></FeatureBox>
      </div>
   </div>
   <div className ="row justify-content-center">
      <div className="col-lg-4 cold-md-6 col-12">
         <FeatureBox icon={
         <FontAwesomeIcon icon={faLaptopCode} />
         } title="I have experience using Java, HTML & CSS, ReactJS, C, javascript, SQL, Prolog, Haskell, Python"></FeatureBox>
      </div>
      <div className="col-lg-4 cold-md-6 col-12">
         <FeatureBox icon={
         <FontAwesomeIcon icon={faBriefcase} />
         } title="I am currently a freelance Web Developer and have completed a cloud computing internship in Zurich Insurance."></FeatureBox> 
      </div>
   </div>
   <div className="row justify-content-center">
   <div className="col-lg-4 cold-md-6 col-12">
   
   <a target="_blank" href={CVBrianLynch} ><Button text="View My Full CV"/></a>
   
   </div>
   </div>
</div>
)
}
export default CV;