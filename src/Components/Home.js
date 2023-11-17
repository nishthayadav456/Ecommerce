
import Nav from '../Navbar/Nav'
import Slider from '../Silder/Slider'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import React, { useEffect ,useState} from 'react'
import Footer from '../Footer/Footer'
import Login from '../Views/Login'
const Home = () => {
  const[data,setData]=useState([])
 
 
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/postdata")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  },[])
  return (
    <div>
      <Nav/>
      <Slider/>
      <h1 className='explore'>Explore more</h1>
      <div className='Home-parent'>
      <div className='Home-section'>
       
       {data.filter((item)=>item.id%11===0).map((item,index)=>{
        console.log(item)
        return(
           <>
           <div>
            <NavLink to={`/dynamic/${item.id}`}>
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h3>{item.heading.slice(0,10)}..</h3></div>
          <div className='price'> <h3>{item.price}</h3> </div>
          <div><button className='addtocart'>Add to cart</button></div> 
          </div>
          </NavLink>
          </div>
          </>
        )
       })}
      </div>
      </div>
   
      <img className='bottom-image' src="https://i.pinimg.com/originals/d6/cd/18/d6cd1890a3ddaf9c45b32d436ccf6826.gif" alt="not found"/>
    
      <Footer/>
      <button><Login/></button>
    </div>
    
  )
}

export default Home
