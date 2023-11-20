
import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
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
  return (
    <div>
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
                    <h2>{item.model}</h2>
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
          <button className='buybtn'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;