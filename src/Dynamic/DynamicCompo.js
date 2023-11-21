import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

import axios from 'axios'
const DynamicCompo = () => {
    const {id} = useParams();
    const newid= parseInt(id)
    const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/Searchdata")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  },[id])
  return (
    <div>
     <Nav/> 
     {data.filter((item)=>item.id===newid).map((item,index)=>{
        console.log(item)
        return(
           <>
           <div className='dynamiccontainer'>
           
           <div>
            
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h3>{item.heading.slice(0,10)}..</h3></div>
          <div className='price'> <h3>₹{item.price}</h3> </div>
         
          </div>
     
         
          </div>
        
          </div>
          </>
        )
       })}
     <Footer/>
    </div>
   
  )
}

export default DynamicCompo
