import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const DynamicCompo = () => {
    const {id} = useParams();
    const newid= parseInt(id)
    const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/home")
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
           <div>
            {/* <NavLink to={`/dynamic/${item.id}`}> */}
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h2>{item.heading.slice(0,10)}..</h2></div>
          <div className='price'> <h2>{item.price}</h2> </div>
         
          </div>
          {/* </NavLink> */}
          </div>
          </>
        )
       })}
     <Footer/>
    </div>
   
  )
}

export default DynamicCompo
