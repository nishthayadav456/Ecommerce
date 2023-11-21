// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { BsCart3 } from "react-icons/bs";
// import { LuUserCircle2 } from "react-icons/lu";
// import { IoIosSearch } from "react-icons/io";
// import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import './Nav.css'
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

const Nav = () => {

  const cardCount = useSelector((state)=>state.Cart.cart)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const[isMobileHovered,setIsMobileHovered]=useState(false)
  const[isClotheHovered,setIsClotheHovered]=useState(false)
  const[isFurnitureHovered,setIsFurnitureHovered]=useState(false)
  const[isWatchHovered,setIsWatchHovered]=useState(false)
  const[isGymHovered,setIsGymHovered]=useState(false)
  const [searchData,setSearchData]=useState([])
  const[val,setval]=useState({value:"",btn:""})
  const [query, setQuery] = useState("");
const token=localStorage.getItem("token")
const userName=localStorage.getItem("name")

const Nav=useNavigate();
useEffect(()=>{
  if(token){
    setval({
      value:userName,
      btn:"LogOut"
    });
}
else{
  setval({
    value:"Profile",
    btn:"SignIn"
  })
}
},[token,Nav,userName])
const handlelogout= ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  Nav("/")
}
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleChange=(e)=>{
    setQuery(e.target.value)
  }
  
  axios.get(`https://e-commerce-nwyx.onrender.com/api/Searchbar?Brand=${query}`)
  .then((res)=>setSearchData(res.data))
  .catch(err=>console.log(err))

  const handleSearch=()=>{
  }
  return(
    <>
    <div>
      <div className="top1">
         <div className="logo1">StoreM4!</div> 
        <div className="top1_right">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        </div>
      </div>
      <nav className={`nav2 ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">StoreM4!</div>
        <div className="ham_Div">
        {/* <input className="search" placeholder="Search Here"></input> */}
        
      
        <div className="sign">
          <button className="ham_Btn">Sign In</button>
        </div>
        </div>
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
                  {/* <NavLink to="/clothe"><li>Clothe</li></NavLink>
                  <NavLink to="/mobile"><li>Mobile</li></NavLink>
                  <NavLink to="/furniture"><li>Furniture</li></NavLink>
                  <NavLink to="/watch"><li>Watch</li></NavLink>
                  <NavLink to="/gym"><li>Gym</li></NavLink> */}
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
            <li>laptop</li>
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
        <div>
        <input  className="search" placeholder="Search here..."onChange={handleChange}/>
        <button id="searchicon" onClick={handleSearch}><Link to="/search" state={searchData}><IoIosSearch /></Link></button>
        </div>
        <NavLink to="/cart">
        <BsCart3 className="ham_Basket_Img2" />
        <span className="span2">{cardCount.length}</span>
        </NavLink>
        <div className="profile"><LuUserCircle2 className="profileImg" />
                <div >
                  <span>{val.value}</span>
                  {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                </div>
            </div>
          
      </nav>
    </div>
    

    </>
  )
}

export default Nav
