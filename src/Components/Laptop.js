import React, { useEffect ,useState} from 'react'

import Footer from '../Footer/Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Navigation from './header/Navigation'
const Laptop = () => {
  const[data,setData]=useState([])
  const [loadData,setLoadData]=useState(5)
  const handleClick=()=>{
    setLoadData(loadData+2);
  }
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/Searchdata")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  },[])
  return (
    
  <>
  <Navigation/>
    <div className='Mainparent'>
      <div className='leftcontainer'>
        <div className='childleft'>
        <h3 className='leftnav'><NavLink to="/hp">HP</NavLink> </h3>
        <h3 className='leftnav'><NavLink to="/dell">Dell</NavLink>  </h3>
        <h3 className='leftnav'> <NavLink to="/acer">Acer</NavLink></h3>
        </div>
     
      </div>
      <div className='mobile-section'>
       
       {data.filter((item)=>item.category==="laptop").slice(0,loadData).map((item,index)=>{
        console.log(item)
        return(
           
            <NavLink to={`/dynamic/${item.id}`}>
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h3>{item.heading.slice(0,10)}..</h3></div>
          <div className='price'> <h3>{item.price}</h3> </div>
          <div><button className='addtocart'>Add to cart</button></div> 
          </div></NavLink>
          
          
        )
       })}
      </div>
   
    </div>
                     <div className="loadParent">
                        <button onClick={handleClick} className="loadMore">
                        Load More
                      </button>
                      </div>
    <Footer/>
    </>
  )
}

export default Laptop
