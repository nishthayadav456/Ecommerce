import { useLocation } from 'react-router-dom'
import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { IoCartSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { addtoCart } from '../Redux/Slice';
import Nav from './Nav';
export const SearchBar = () => {
    const [loadData,setLoadData]=useState(8)
    const handleClick=()=>{
      setLoadData(loadData+2);
    }
 const dispatch =useDispatch()
 const location =useLocation()
 const data = location.state
 console.log(data)
  return (
    <div className="Search-Parent">
                    <Nav/>
                          <div className="Search-SubParent">
                            <div className="Right-search">
                            {
                              data.slice(0,loadData).map((item,index)=>{
                                const{id=item.id,image=item.image,Brand=item.Brand,price=item.price} = item
                                return (
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="middle" key={index}>
                                        <div><img className="Search-Img" src={item.image} alt="Not Found"/></div>
                                        <h3>{item.Brand}</h3>
                                        <div className="price">{item.price}</div>
                                    </div>
                                  </NavLink>
                                  <IoCartSharp className="cart-icon1"/>
                                  <button onClick={()=>dispatch(addtoCart({id,image,Brand,price}))} className='addtocart1'>Add to cart</button>
                                  </div>
                                )
                              })
                            }
                            </div>
                          </div>
                          <div className="loadParent">
                        <button onClick={handleClick} className="loadMore">
                        Load More
                      </button>
                      </div>
                         <Footer/>
                </div>
            )
}
