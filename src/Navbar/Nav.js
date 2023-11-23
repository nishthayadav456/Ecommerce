
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
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [HomeHover, HomeHovered] = useState(false);
  const[MobileHover,MobileHovered]=useState(false)
  const[laptopHover,laptopHovered]=useState(false)
  const[watchesHover,watchesHovered]=useState(false)
  const[accessoriesHover,accessoriesHovered]=useState(false)
  const[televisionHover,televisionHovered]=useState(false)
  const [searchData,setSearchData]=useState([])
  const[val,setval]=useState({value:"",btn:""})
  const [query, setQuery] = useState("");
const token=localStorage.getItem("token")
const userName=localStorage.getItem("name")

const Navigate=useNavigate();
useEffect(()=>{
  if(token){
    setval({
      value:userName,
      btn:"LogOut"
    });
}
else{
  setval({
    value:"User",
    btn:"Sign in"
  })
}
},[token,Navigate,userName])
const handlelogout= ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  Navigate("/")
}
  const toggleMenu = () => {
    setdropdownOpen(!dropdownOpen);
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
      <div className="topbar">
         <div className="logo1">StoreM4!</div> 
        <div className="right-container">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        </div>
      </div>
      <nav className={`nav2 ${dropdownOpen ? "open" : ""}`}>
      <div className="logo">StoreM4!</div>
        <div className="Main-hamburger">
       <div className="signbtn">
          <button className="hamburger-Btn">Sign in</button>
        </div>
        </div>
        <div
          className="home-container"
          onMouseEnter={() => HomeHovered(true)}
          onMouseLeave={() => HomeHovered(false)}
        >
          <NavLink to="/">
            <ul  type="none">
              <li>Home</li>
              {HomeHover && (
                <ul type="none" className="dropdown">
                 
                </ul>
              )}
            </ul>
          </NavLink>
        </div>
        <div
         className="mobile-container"
         onMouseEnter={() => MobileHovered(true)}
         onMouseLeave={() => MobileHovered(false)}
        >
             <NavLink to="/mobile">
          <ul  type="none">
            <li>Mobile</li>
            {MobileHover && (
                <ul type="none" className="dropdown">
                <NavLink to="/realme"><li>Realme</li></NavLink>
                <NavLink to="/vivo"><li>Vivo</li></NavLink>
                <NavLink to="/samsung"><li>Samsung</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
       <div
        className="laptop-container"
        onMouseEnter={() => laptopHovered(true)}
        onMouseLeave={() => laptopHovered(false)}
       >
       <NavLink to="/laptop">
          <ul type="none">
            <li>laptop</li>
            {laptopHover && (
                 <ul type="none" className="dropdown" >
                <NavLink to="/hp"><li>HP</li></NavLink>
                 <NavLink to="/dell"><li>Dell</li></NavLink>
                 <NavLink to="/acer"><li>Acer</li></NavLink>
                  </ul>
            )}
              </ul>
        </NavLink>
       </div>
       <div className="watches-container"
          onMouseEnter={() => watchesHovered(true)}
          onMouseLeave={() => watchesHovered(false)}
       >
       <NavLink to="/watches">
          <ul type="none">
            <li>Watches</li>
            {watchesHover && (
                <ul type="none" className="dropdown">
                 <NavLink to="/fastrack"><li>Fastrack</li></NavLink>
                   <NavLink to="/titan"><li>Titan</li></NavLink>
                   <NavLink to="/casio"><li>Casio</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
       </div>
       <div
         className="accessories-container"
         onMouseEnter={() => accessoriesHovered(true)}
         onMouseLeave={() => accessoriesHovered(false)}
       >
       <NavLink to="/accessories">
          <ul type="none">
            <li>Accessories</li>
            {accessoriesHover && (
                <ul type="none" className="dropdown">
                   <NavLink to="/charger"><li>Charger</li></NavLink>
                    <NavLink to="/headphone"><li>Headphones</li></NavLink>
                  </ul>
            )}
            </ul>
        </NavLink>
       </div>
        <div
              className="television-container"
              onMouseEnter={() => televisionHovered(true)}
              onMouseLeave={() => televisionHovered(false)}
        >
        <NavLink to="/television">
          <ul type="none">
           <li>Television</li>
            {televisionHover && (
                <ul type="none" className="dropdown">
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
        <BsCart3 className="cartImage" />
        <span className="span2">{cardCount.length}</span>
        </NavLink>
        <div className="profile"><LuUserCircle2 className="user-Img" />
                <div className="user-parent">
                  <span className="username">{val.value}</span>
                  {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/register' style={{color:"white"}}>{val.btn}</NavLink></span>
                  }
                </div>
            </div>
          
      </nav>
    </div>
    

    </>
  )
}

export default Nav
