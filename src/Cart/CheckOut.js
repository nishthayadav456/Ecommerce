import React from 'react'
import './Cart.css'
const CheckOut = () => {
  return (
    <>
    <div className='body2'>
       <header>
    <h1>StoreM4 Checkout</h1>
  </header>

  <main>
    <form id='form'>
      <label id="label" for="name">Name:</label>
      <input className="input-field" type="text" id="name" name="name" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="address">Address:</label>
      <input type="text" id="address" name="address" required/>

      <label for="card">Credit Card Number:</label>
      <input type="text" id="card" name="card" required/>

      <label for="expiry">Expiry Date:</label>
      <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required/>

      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" required/>

      <button id='btn' type="submit">Place Order</button>
    </form>
  </main>

    </div>
    </>
  )
}

export default CheckOut
