
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import Footer from '../../Footer/Footer'
import Nav from '../../Navbar/Nav'
import { NavLink } from 'react-router-dom'
import { addtoCart } from '../../Redux/Slice'
import { useDispatch } from 'react-redux'
import { IoCartSharp } from "react-icons/io5";
const Samsung = () => {
  const dispatch=useDispatch()
  const[data,setData]=useState([])
  const [loadData,setLoadData]=useState(8)
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
      <Nav/>
      <div className='Mainparent'>
        <div className='mobile-section'>
         
         {data.filter((item)=>item.Brand==="Samsung").slice(0,loadData).map((item,index)=>{
          console.log(item)
          const{id=item.id,image=item.image,heading=item.heading,price=item.price} = item
          console.log(id)
          return(
             <div>
             <NavLink to={`/dynamic/${item.id}`}>
            <div className="middle"key={index}>
        <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
            
              <div><h3>{item.heading.slice(0,10)}..</h3></div>
            <div className='price'> <h3>₹{item.price}</h3> </div>
           
            </div>
            </NavLink>
            <IoCartSharp className="cart-icon"/>
            <button onClick={()=>dispatch(addtoCart({id,image,heading,price}))} className='addtocart'>Add to cart</button>
            </div>
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

export default Samsung
