import React, { useEffect ,useState} from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Watches = () => {
  const[data,setData]=useState([])
  const [loadData,setLoadData]=useState(5)
  const handleNext=()=>{
    setLoadData(loadData+2);
  }
  useEffect(()=>{
    axios.get("https://e-commerce-nwyx.onrender.com/api/watches")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  },[])
  return (
    
  <>
  <Nav/>
    <div className='Mainparent'>
      <div className='leftcontainer'>
        <div className='childleft'>
        <h3 className='leftnav'><NavLink>Fastrack</NavLink> </h3>
        <h3 className='leftnav'><NavLink>Titan</NavLink>  </h3>
        <h3 className='leftnav'><NavLink>Casio</NavLink>  </h3>

        </div>
     
      </div>
      <div className='mobile-section'>
       
       {data.filter((item)=>item.category==="watches").slice(0,loadData).map((item,index)=>{
        console.log(item)
        return(
           <>
          <div className="middle"key={index}>
      <div>  <img className='mobileimage' src={item.image} alt="not found"/></div>
          
            <div><h2>{item.heading.slice(0,10)}..</h2></div>
          <div className='price'> <h2>{item.price}</h2> </div>
          {/* <BsFillCartDashFill/>
          <button className='btn'>Add to cart</button> */}
          </div>
          </>
        )
       })}
      </div>
   
    </div>
    <div className="loadMore_Parent">
                        <button onClick={handleNext} className="loadMore">
                        Load More
                      </button>
                      </div>
    <Footer/>
    </>
  )
}

export default Watches
