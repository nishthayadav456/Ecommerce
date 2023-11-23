
import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import {loadStripe} from '@stripe/stripe-js';
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Cart.cart);
  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

  const makePayment =async()=>{
    const stripe =await loadStripe("pk_test_51OFItISCdgFzkvVrT97f8wISsM8pcRcV5plNex0OQNGEuSXZVPU2ltSdZPMKYjbb9SEbHbUgqmrnBV8Ql3KdlZQl00kXWKpA80")
    const body ={
      products:data
      
    }
    console.log(body)
    const headers={
      "Content-Type":"application/json"
    }
    const response = await fetch("https://e-commerce-nwyx.onrender.com/check/checkoutdata",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
    })
    const session= await response.json();
    const result =stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error)
    }
   }
  return (
    <div className='body1'>
      <h2 className="cartparent"> Your Cart</h2>
      <div className="contentcart">
        <div className="titleOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <div>
          {data &&
            data.map((item, index) => {
              return (
                <div className="contents" key={index}>
               
                  <img className='contentsimg' src={item.image} alt="Not Found" />
                  <div className="content1">
                    <h5 style={{width:"40%"}}>{item.heading.slice(0,20)}</h5>
                    <button className="cartremove" onClick={() => dispatch(RemoveItem({ id: item.id }))}>Remove Cart</button>
                  </div>
                  <div>
                    <button className="quantbtn" onClick={() => handleDecreaseQuantity(item.id)}> -</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantbtn" onClick={() => handleIncreaseQuantity(item.id)} > +</button>
                  </div>
                  <h2 className="price">{"₹ " + item.price * item.quantity}</h2>
                </div>
              );
            })}
        </div>
        <div className="totalitem">
          <h2>Total </h2>
          <h1>₹{total}</h1>
        </div>
        <div className="buying">
          <button className='buybtn' onClick={makePayment}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;