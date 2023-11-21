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
  
  axios.get(`https://e-commerce-nwyx.onrender.com/api/search?title=${query}`)
  .then((res)=>setSearchData(res.data))
  .catch(err=>console.log(err))

  const handleSearch=()=>{
  }













  // const [isMobile, setIsMobile] = useState(false);
  // const Dropdown = () => {
  //   setIsMobile(isMobile);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  //   const cartCount =useSelector((state)=>state.Cart.cart)
  // // const [MenuOpen] = useState(false);
  // const [HomeHover, HomeHovered] = useState(false);
  // const[MobileHover,MobileHovered]=useState(false)
  // const[acceHover,acceHovered]=useState(false)
  // const[laptopHover,laptopHovered]=useState(false)
  // const[WatchHover,WatchHovered]=useState(false)
  // const[teleHover,televHovered]=useState(false)
  // return (
  //   <div>
  //      <nav className={`nav2 ${isMobile? "DropDown" : "Navbar"}`}>
  //     <h1 className='store'>StoreM4!</h1>
  //     <img
  //           onClick={() => setIsMobile(!isMobile)}
  //           className="Burger_Icon"
  //           width="50"
  //           height="50"
  //           src="https://img.icons8.com/ios/50/menu--v7.png"
  //           alt="icon not found"
  //         />
  //       <div className="homecontainer" id={isMobile? "DropDown" : "Navbar"}
  //         onMouseEnter={() => HomeHovered(true)}
  //         onMouseLeave={() => HomeHovered(false)}
  //       >
  //         <NavLink to="/" onClick={Dropdown}>
  //           <ul  type="none">
  //             <li>Home</li>
  //             {HomeHover && (
  //               <ul type="none" className="menu">
                
  //               </ul>
  //             )}
  //           </ul>
  //         </NavLink>
  //       </div>
  //       <div className="mobilecontainer" id={isMobile? "DropDown" : "Navbar"}
  //        onMouseEnter={() => MobileHovered(true)}
  //        onMouseLeave={() => MobileHovered(false)}
  //       >
  //            <NavLink to="/mobile" onClick={Dropdown}>
  //         <ul  type="none">
  //           <li>Mobile</li>
  //           {MobileHover && (
  //               <ul type="none" className="menu">
  //               <NavLink to="/realme"><li>Realme</li></NavLink>
  //               <NavLink to="/vivo"><li>Vivo</li></NavLink>
  //               <NavLink to="/samsung"><li>Samsung</li></NavLink>
  //               </ul>
  //           )}
  //         </ul>
  //       </NavLink>
  //       </div>
  //      <div className="laptopcontainer" id={isMobile? "DropDown" : "Navbar"}
  //   onMouseEnter={() => laptopHovered(true)}
  //       onMouseLeave={() => laptopHovered(false)}
  //      >
  //      <NavLink to="/laptop" onClick={Dropdown}>
  //         <ul type="none">
  //           <li>Laptop</li>
  //           {laptopHover && (
  //                <ul type="none" className="menu" >
  //               <NavLink to="/hp"><li>HP</li></NavLink>
  //               <NavLink to="/dell"><li>Dell</li></NavLink>
  //               <NavLink to="/acer"><li>Acer</li></NavLink>
  //                 </ul>
  //           )}
  //             </ul>
  //       </NavLink>
  //      </div>
  //      <div className="watchcontainer" id={isMobile? "DropDown" : "Navbar"}
  //         onMouseEnter={() => WatchHovered(true)}
  //         onMouseLeave={() => WatchHovered(false)}
  //      >
  //      <NavLink to="/watches" onClick={Dropdown}>
  //         <ul type="none">
  //           <li>Watches</li>
  //           {WatchHover && (
  //               <ul type="none" className="menu">
  //                 <NavLink to="/fastrack"><li>Fastrack</li></NavLink>
  //                 <NavLink to="/titan"><li>Titan</li></NavLink>
  //                 <NavLink to="/casio"><li>Casio</li></NavLink>
  //               </ul>
  //           )}
  //         </ul>
  //       </NavLink>
  //      </div>
  //      <div className="accessoriescontainer" id={isMobile? "DropDown" : "Navbar"}
  //        onMouseEnter={() => acceHovered(true)}
  //        onMouseLeave={() => acceHovered(false)}
  //      >
  //      <NavLink to="/accessories" onClick={Dropdown}>
  //         <ul type="none">
  //           <li>Accessories</li>
  //           {acceHover && (
  //               <ul type="none" className="menu">
  //                  <NavLink to="/charger"><li>Charger</li></NavLink>
  //                  <NavLink to="/headphone"><li>Headphones</li></NavLink>
                  
  //                 </ul>
  //           )}
  //           </ul>
  //       </NavLink>
  //      </div>
  //       <div className="televisioncontainer" id={isMobile? "DropDown" : "Navbar"}
  //             onMouseEnter={() => televHovered(true)}
  //             onMouseLeave={() => televHovered(false)}
  //       >
  //       <NavLink to="/television"onClick={Dropdown}>
  //         <ul type="none">
  //          <li>Television</li>
  //           {teleHover && (
  //               <ul type="none" className="menu">
  //              <NavLink to="/lg"> <li>LG</li></NavLink>
  //              <NavLink to="/samsungtv"><li>Samsung</li></NavLink>
               
  //               </ul>
  //           )}
  //         </ul>
  //       </NavLink>
  //       </div>
  //       <div className='box'>
  //       <input  className="SearchBar" placeholder="Search Here..." ></input>< IoIosSearch id ="searchicon"/>
       
  //       <div className='cart'>  
  //       <NavLink to="/cart">< BsCart3 style={{color:"white" ,height:"25px", width:"30px" }}/><span style={{color:"orange"}}>{cartCount.length}</span></NavLink>
  //       </div>
      
  //      <NavLink to="/register">
  //       <div className='loginicon'>
        
  //       <LuUserCircle2 style={{height:"27px", width:"30px"}}/>
  //       </div>
  //       </NavLink>
  //       </div>
  //    </nav>
  //   </div>
  // )
  return(
    <>
    <div>
      <div className="top1">
         <div className="logo1">StoreM4!</div> 
        <div className="top1_right">
           
        {/* <div>
        <input  className="search_Bar"onChange={handleChange}/>
        <button  className="headBtn" onClick={handleSearch}><Link to="/search" state={searchData}>< IoIosSearch className="seracImg"/></Link></button>
        </div> */}
        {/* <NavLink to="/cart">
        < BsCart3 className="basket_Img basket" style={{color:"white" ,height:"25px", width:"30px" }}/><span className="span1" >{cardCount.length}</span>
        </NavLink> */}
         {/* <div className="profile"><LuUserCircle2 className="profileImg"  style={{height:"27px", width:"30px"}}/>
                <div >
                  <span>{val.value}</span>
                  {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                </div>
            </div> */}
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
        <input  className="search"onChange={handleChange}/>
        <button id="searchicon" onClick={handleSearch}><Link to="/search" state={searchData}>< IoIosSearch  /></Link></button>
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
