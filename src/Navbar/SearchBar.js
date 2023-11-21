
import { useLocation } from 'react-router-dom'
import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { IoCartSharp } from "react-icons/io5";
// import { addtoCart } from '../fiture/Store.js/Slice';
// import Header from './Header';

import Footer from '../Footer/Footer';
import { addtoCart } from '../Redux/Slice';
import Nav from './Nav';
export const SearchBar = () => {
    const [loadData,setLoadData]=useState(8)
    const handleClick=()=>{
      setLoadData(loadData+2);
    }
    const location =useLocation()
    const data = location.state
    console.log(data)
    const dispatch =useDispatch()
  return (
    <div className="home_Parent">
                    <Nav/>
                          <div className="home_SubParent">
                            <div className="home_Right">
                            {
                              data.slice(0,loadData).map((item,index)=>{
                                const{id=item.id,image=item.image,Brand=item.Brand,price=item.price} = item
                                return (
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.image} alt="Not Found"/></div>
                                        <h3>{item.Brand}</h3>
                                        <div className="price">&#8377;&nbsp;{item.price}</div>
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
