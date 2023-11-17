import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import Footer from '../../Footer/Footer'
import Nav from '../../Navbar/Nav'
import { NavLink } from 'react-router-dom'
const Casio = () => {
  const[data,setData]=useState([])
  const [loadData,setLoadData]=useState(5)
        const handleClick=()=>{
          setLoadData(loadData+2);
        }
    useEffect(()=>{
      axios.get("https://e-commerce-nwyx.onrender.com/api/searchdata")
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
         
         {data.filter((item)=>item.Brand === "Casio").slice(0,loadData).map((item,index)=>{
          console.log(item)
          return(
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

export default Casio
