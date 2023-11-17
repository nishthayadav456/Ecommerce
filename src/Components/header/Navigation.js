import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
function Navigation() {
    const [isClick,setIsClick]=useState(false);
    const [className,setClassName]=useState('closeHamburger');
    const [navClassName,setNavClassName]=useState("nav");
    const handleClick=()=>{
        setIsClick(!isClick);
        if(!isClick) {
          setClassName('openHamburger') 
           setNavClassName('openNav')  
        }else{
          setClassName('closeHamburger')
          setNavClassName('nav')//display none
        }
    }
  return (
    <>
    <div className='hamburger' onClick={handleClick}>
 <div className={className}></div>
 <div className={className}></div>
 <div className={className}></div>
 </div>
 <div className={navClassName}>
    <NavLink  onClick={handleClick} to='/' >Home</NavLink>
    <NavLink  onClick={handleClick} to='/mobile' style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Mobiles</NavLink>
    <NavLink  onClick={handleClick} to='/laptop' style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Laptop</NavLink>
    <NavLink  onClick={handleClick} to='/watches'style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >watches</NavLink>
    <NavLink  onClick={handleClick} to='/accessories'   style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Accessories</NavLink>
    <NavLink  onClick={handleClick} to='/television'      style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Television</NavLink>
  </div>
 </>
  )
}
export default Navigation