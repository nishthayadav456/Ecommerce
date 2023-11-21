import React from 'react'
import { useLocation } from 'react-router-dom'

import { NavLink } from "react-router-dom";
 import { useDispatch } from "react-redux";

// import { addtoCart } from '../fiture/Store.js/Slice';
// import Header from './Header';

import Footer from '../Footer/Footer';
import { addtoCart } from '../Redux/Slice';
import Nav from './Nav';
export const SearchBar = () => {
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
                              data.map((item,index)=>{
                                const{id=item.id,image=item.image,Model=item.Model,price=item.price} = item
                                return (
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.image} alt="Not Found"/></div>
                                        <div className="titel">{item.Model}</div>
                                        <div className="price">&#8377;&nbsp;{item.price}</div>
                                    </div>
                                  </NavLink>
                                  <button onClick={()=>dispatch(addtoCart({id,image,Model,price}))}>
                                          Add To Cart
                                          </button>
                                  </div>
                                )
                              })
                            }
                            </div>
                          </div>
                         <Footer/>
                </div>
            )
}
