import React from 'react'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({text, style}) =>  {

   return (
      <div>
   {style == "alt" ?<button className="btn btn-outline-dark btnStyle2">{text}</button> : <button className="btn btn-outline-light btnStyle">{text}</button>}
   </div>
   )
}
export default Button