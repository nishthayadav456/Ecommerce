import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import { IoCartSharp } from "react-icons/io5";
import { addtoCart } from '../Redux/Slice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const DynamicCompo = () => {
  const dispatch=useDispatch()
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
        const{id=item.id,image=item.image,title=item.title,price=item.price} = item
        console.log(id)
        return(
           <>
           <div className='dynamiccontainer'>
           
           <div>
            
          <div className="leftcon"key={index}>
          <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          </div>
          <div className='rightcon'>
            <div><h3>{item.heading.slice(0,10)}..</h3></div>
          <div className='price'> <h3>₹{item.price}</h3> </div>
         <h6>{item.description.slice(0,200)}...</h6>
         <IoCartSharp className="cart-icon"/>
          <button onClick={()=>dispatch(addtoCart({id,image,title,price}))} className='addtocart'>Add to cart</button>
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
