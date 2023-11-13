import React, { useEffect ,useState} from 'react'
import {BsFillCartDashFill} from 'react-icons/bs'
import axios from 'axios'

const Accessories = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/accessories")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  })
  return (
    <div className='Mainparent'>
    <h1 className='mobilebar'>Mobiles</h1>
   <div className='mobile-section'>
    
    {data.filter((item)=>item.id>=72 && item.id<89).map((item,index)=>{
     console.log(item)
     return(
        <>
       <div className="middle"key={index}>
   
         <img className='mobileimage' src={item.image} alt="not found"/>
         
       <div className='price'>
       <h2>{item.price}</h2>
       </div>
       <BsFillCartDashFill/>
       <button className='btn'>Add to cart</button>
       </div>
       </>
     )
    })}
   </div>

 </div>
  )
}

export default Accessories
