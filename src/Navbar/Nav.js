import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const[isMobileHovered,setIsMobileHovered]=useState(false)
  const[isClotheHovered,setIsClotheHovered]=useState(false)
  const[isFurnitureHovered,setIsFurnitureHovered]=useState(false)
  const[isWatchHovered,setIsWatchHovered]=useState(false)
  const[isGymHovered,setIsGymHovered]=useState(false)
  return (
    <div>
      <nav className={`nav2 ${isMenuOpen ? "open" : ""}`}>
        
        <div
          className="home-container"
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          <NavLink to="/">
            <ul  type="none">
              <li>Home</li>
              {isHomeHovered && (
                <ul type="none" className="menu">
                  <NavLink to="/">Home</NavLink>
      <NavLink to="/laptop">Laptop</NavLink>
     <NavLink to="/mobile">Mobiles</NavLink>
      <NavLink to="/watches">watches</NavLink>
       <NavLink to="/television">Television </NavLink>
     <NavLink to="/accessories">Accessories</NavLink>
                </ul>
              )}
            </ul>
          </NavLink>
        </div>
        <div
         className="mobile-container"
         onMouseEnter={() => setIsMobileHovered(true)}
         onMouseLeave={() => setIsMobileHovered(false)}
        >
             <NavLink to="/mobile">
          <ul  type="none">
            <li>Mobile</li>
            {isMobileHovered && (
                <ul type="none" className="menu">
                <NavLink to="/realme"><li>Realme</li></NavLink>
                <NavLink to="/vivo"><li>Vivo</li></NavLink>
                <NavLink to="/samsung"><li>Samsung</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
       <div
        className="furniture-container"
        onMouseEnter={() => setIsFurnitureHovered(true)}
        onMouseLeave={() => setIsFurnitureHovered(false)}
       >
       <NavLink to="/laptop">
          <ul type="none">
            <li>Laptop</li>
            {isFurnitureHovered && (
                 <ul type="none" className="menu" >
                <NavLink to="/hp"><li>HP</li></NavLink>
                <NavLink to="/dell"><li>Dell</li></NavLink>
                <NavLink to="/acer"><li>Acer</li></NavLink>
                  </ul>
            )}
              </ul>
        </NavLink>
       </div>
       <div
          className="watch-container"
          onMouseEnter={() => setIsWatchHovered(true)}
          onMouseLeave={() => setIsWatchHovered(false)}
       >
       <NavLink to="/watches">
          <ul type="none">
            <li>Watches</li>
            {isWatchHovered && (
                <ul type="none" className="menu">
                  <NavLink to="/fastrack"><li>Fastrack</li></NavLink>
                  <NavLink to="/titan"><li>Titan</li></NavLink>
                  <NavLink to="/casio"><li>Casio</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
       </div>
       <div
         className="clothe-container"
         onMouseEnter={() => setIsClotheHovered(true)}
         onMouseLeave={() => setIsClotheHovered(false)}
       >
       <NavLink to="/accessories">
          <ul type="none">
            <li>Accessories</li>
            {isClotheHovered && (
                <ul type="none" className="menu">
                   <NavLink to="/charger"><li>Charger</li></NavLink>
                   <NavLink to="/headphone"><li>Headphones</li></NavLink>
                  
                  </ul>
            )}
            </ul>
        </NavLink>
       </div>
        <div
              className="gym-container"
              onMouseEnter={() => setIsGymHovered(true)}
              onMouseLeave={() => setIsGymHovered(false)}
        >
        <NavLink to="/television">
          <ul type="none">
           <li>Television</li>
            {isGymHovered && (
                <ul type="none" className="menu">
               <NavLink to="/lg"> <li>LG</li></NavLink>
               <NavLink to="/samsungtv"><li>Samsung</li></NavLink>
               
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
        <div className='box'>
        <input  placeholder="Search Here"></input>
        {/* <NavLink to="/cart"> */}
        <div className='cart'>  <BsCart3 /></div>
      
        {/* <span className="span2">{cardCount.length}</span> */}
        {/* </NavLink> */}
        <div>
          <button>Sign In</button>
        </div>
        </div>
     </nav>
    </div>
  )
}

export default Nav
