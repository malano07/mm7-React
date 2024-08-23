import React from 'react'
import "./Navbar.css"
import CarritoLogo from '../CarritoLogo/CarritoLogo'


const Navbar = () => {


  return (
    
    <header>
        <img src="http://imgfz.com/i/UmWiRea.png" alt="" />
        <nav>
            <ul>
              <li><i></i>Remeras</li>
              <li><i></i>Gorras</li>
              <li><i></i>Buzos</li>
              <li><i></i>Sale</li>
              <li><i></i>FAQ</li>
            </ul>
        </nav>
        <CarritoLogo/>
        
        
    </header>
  )
}

export default Navbar