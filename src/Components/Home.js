

import Slider from '../Silder/Slider'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import React, { useEffect ,useState} from 'react'
import Footer from '../Footer/Footer'
import { addtoCart } from '../Redux/Slice'
import { useDispatch } from 'react-redux'
import { FaShippingFast } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { RiRefund2Fill } from "react-icons/ri";
import Nav from '../Navbar/Nav'


const Home = () => {
  const dispatch=useDispatch()
  const[data,setData]=useState([])
  const [loadData,setLoadData]=useState(6)
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
    <div>
      <Nav/>
      <Slider/>
      <h1 className='explore'>Explore more</h1>
      <div className='Home-parent'>
      <div className='Home-section'>
       
       {data.filter((item)=>item.id%11===0).slice(0,loadData).map((item,index)=>{
        console.log(item)
        const{id=item.id,image=item.image,title=item.title,price=item.price} = item
        console.log(id)
        return(
           <>
           <div>
            <NavLink to={`/dynamic/${item.id}`}>
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h3>{item.heading.slice(0,10)}..</h3></div>
          <div className='price'> <h3>₹{item.price}</h3> </div>
          
          </div>
          </NavLink>
          <button onClick={()=>dispatch(addtoCart({id,image,title,price}))} className='addtocart'>Add to cart</button>
          </div>
          </>
        )
       })}
      </div>
      </div>
      <div className="loadParent">
                        <button onClick={handleClick} className="loadMore">
                        Load More
                      </button>
                      </div>
      <img className='bottom-image' src="https://i.pinimg.com/originals/d6/cd/18/d6cd1890a3ddaf9c45b32d436ccf6826.gif" alt="not found"/>
      <div className='shipping'> 
      <div className='shipping1'>
        <FaShippingFast className='icon1'/>
        <h5>Free Shipping</h5>
        <p> Welcome to our online storeM4,Big buys, but bigger savings on free savings day sale We have extended free shipping on all orders Get Free Shipping on all orders!</p>
        </div>
       <div className='shipping1'>
        < RiRefund2Fill  className='icon1' />
        <h5>Refund Policy</h5>
        <p>Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.Atyour satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.</p>
        </div> 
<div className='shipping1'>
  <GrUserManager className='icon1'/>
  <h5>Customer Support</h5>
  <p>  At StoreM4your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.</p>
  </div>
      </div>
     
      <Footer/>
  
    </div>
    
  )
}

export default Home
