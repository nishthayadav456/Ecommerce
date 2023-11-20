import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const Dropdown = () => {
    setIsMobile(isMobile);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    const cartCount =useSelector((state)=>state.Cart.cart)
  // const [MenuOpen] = useState(false);
  const [HomeHover, HomeHovered] = useState(false);
  const[MobileHover,MobileHovered]=useState(false)
  const[acceHover,acceHovered]=useState(false)
  const[laptopHover,laptopHovered]=useState(false)
  const[WatchHover,WatchHovered]=useState(false)
  const[teleHover,televHovered]=useState(false)
  return (
    <div>
       <nav className={`nav2 ${isMobile? "DropDown" : "Navbar"}`}>
      <h1 className='store'>StoreM4!</h1>
      <img
            onClick={() => setIsMobile(!isMobile)}
            className="Burger_Icon"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/menu--v7.png"
            alt="icon not found"
          />
        <div className="homecontainer" id={isMobile? "DropDown" : "Navbar"}
          onMouseEnter={() => HomeHovered(true)}
          onMouseLeave={() => HomeHovered(false)}
        >
          <NavLink to="/" onClick={Dropdown}>
            <ul  type="none">
              <li>Home</li>
              {HomeHover && (
                <ul type="none" className="menu">
                
                </ul>
              )}
            </ul>
          </NavLink>
        </div>
        <div className="mobilecontainer" id={isMobile? "DropDown" : "Navbar"}
         onMouseEnter={() => MobileHovered(true)}
         onMouseLeave={() => MobileHovered(false)}
        >
             <NavLink to="/mobile" onClick={Dropdown}>
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
       <div className="laptopcontainer" id={isMobile? "DropDown" : "Navbar"}
    onMouseEnter={() => laptopHovered(true)}
        onMouseLeave={() => laptopHovered(false)}
       >
       <NavLink to="/laptop" onClick={Dropdown}>
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
       <div className="watchcontainer" id={isMobile? "DropDown" : "Navbar"}
          onMouseEnter={() => WatchHovered(true)}
          onMouseLeave={() => WatchHovered(false)}
       >
       <NavLink to="/watches" onClick={Dropdown}>
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
       <div className="accessoriescontainer" id={isMobile? "DropDown" : "Navbar"}
         onMouseEnter={() => acceHovered(true)}
         onMouseLeave={() => acceHovered(false)}
       >
       <NavLink to="/accessories" onClick={Dropdown}>
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
        <div className="televisioncontainer" id={isMobile? "DropDown" : "Navbar"}
              onMouseEnter={() => televHovered(true)}
              onMouseLeave={() => televHovered(false)}
        >
        <NavLink to="/television"onClick={Dropdown}>
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
        <input  className="SearchBar" placeholder="Search Here..." ></input>< IoIosSearch id ="searchicon"/>
       
        <div className='cart'>  
        <NavLink to="/cart">< BsCart3 style={{color:"white" ,height:"25px", width:"30px" }}/><span style={{color:"orange"}}>{cartCount.length}</span></NavLink>
        </div>
      
       <NavLink to="/register">
        <div className='loginicon'>
        
        <LuUserCircle2 style={{height:"27px", width:"30px"}}/>
        </div>
        </NavLink>
        </div>
     </nav>
    </div>
  )
}

export default Nav
