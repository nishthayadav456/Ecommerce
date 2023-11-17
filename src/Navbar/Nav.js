import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Nav = () => {

    const cartCount =useSelector((state)=>state.Cart.cart)
  const [MenuOpen] = useState(false);
  const [HomeHover, HomeHovered] = useState(false);
  const[MobileHover,MobileHovered]=useState(false)
  const[acceHover,acceHovered]=useState(false)
  const[laptopHover,laptopHovered]=useState(false)
  const[WatchHover,WatchHovered]=useState(false)
  const[teleHover,televHovered]=useState(false)
  return (
    <div>
       <nav className={`nav2 ${MenuOpen ? "open" : ""}`}>
      <h1 className='store'>StoreM4!</h1>
        <div className="homecontainer"
          onMouseEnter={() => HomeHovered(true)}
          onMouseLeave={() => HomeHovered(false)}
        >
          <NavLink to="/">
            <ul  type="none">
              <li>Home</li>
              {HomeHover && (
                <ul type="none" className="menu">
                
                </ul>
              )}
            </ul>
          </NavLink>
        </div>
        <div className="mobilecontainer"
         onMouseEnter={() => MobileHovered(true)}
         onMouseLeave={() => MobileHovered(false)}
        >
             <NavLink to="/mobile">
          <ul  type="none">
            <li>Mobile</li>
            {MobileHover && (
                <ul type="none" className="menu">
                <NavLink to="/realme"><li>Realme</li></NavLink>
                <NavLink to="/vivo"><li>Vivo</li></NavLink>
                <NavLink to="/samsung"><li>Samsung</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
       <div className="laptopcontainer"
    onMouseEnter={() => laptopHovered(true)}
        onMouseLeave={() => laptopHovered(false)}
       >
       <NavLink to="/laptop">
          <ul type="none">
            <li>Laptop</li>
            {laptopHover && (
                 <ul type="none" className="menu" >
                <NavLink to="/hp"><li>HP</li></NavLink>
                <NavLink to="/dell"><li>Dell</li></NavLink>
                <NavLink to="/acer"><li>Acer</li></NavLink>
                  </ul>
            )}
              </ul>
        </NavLink>
       </div>
       <div className="watchcontainer"
          onMouseEnter={() => WatchHovered(true)}
          onMouseLeave={() => WatchHovered(false)}
       >
       <NavLink to="/watches">
          <ul type="none">
            <li>Watches</li>
            {WatchHover && (
                <ul type="none" className="menu">
                  <NavLink to="/fastrack"><li>Fastrack</li></NavLink>
                  <NavLink to="/titan"><li>Titan</li></NavLink>
                  <NavLink to="/casio"><li>Casio</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
       </div>
       <div className="accessoriescontainer"
         onMouseEnter={() => acceHovered(true)}
         onMouseLeave={() => acceHovered(false)}
       >
       <NavLink to="/accessories">
          <ul type="none">
            <li>Accessories</li>
            {acceHover && (
                <ul type="none" className="menu">
                   <NavLink to="/charger"><li>Charger</li></NavLink>
                   <NavLink to="/headphone"><li>Headphones</li></NavLink>
                  
                  </ul>
            )}
            </ul>
        </NavLink>
       </div>
        <div className="televisioncontainer"
              onMouseEnter={() => televHovered(true)}
              onMouseLeave={() => televHovered(false)}
        >
        <NavLink to="/television">
          <ul type="none">
           <li>Television</li>
            {teleHover && (
                <ul type="none" className="menu">
               <NavLink to="/lg"> <li>LG</li></NavLink>
               <NavLink to="/samsungtv"><li>Samsung</li></NavLink>
               
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
        <div className='box'>
        <input  placeholder="Search Here..."></input>
       
        <div className='cart'>  
        <NavLink to="/cart"><BsCart3 /><span style={{color:"red"}}>{cartCount.length}</span></NavLink>
        </div>
      
       <NavLink to="/register">
        <div className='loginicon'>
        
          <FaRegUser />
        </div>
        </NavLink>
        </div>
     </nav>
    </div>
  )
}

export default Nav
