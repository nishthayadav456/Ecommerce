

const Signup = () => {
    
  return (
    
       <div>
      <div className='form-container'>
<h2>Signup</h2>
<form action ='/signup' method="get">
<div className='form-group'>
<label for="name">Name:</label>
<input type="text" id="name" name="username" placeholder="Enter your name" required/>
</div>
<div className='form-group'>
<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="password" required/>
</div>
<button type="submit" className='submit-btn'>signup</button>
</form>

      </div>
    </div>
    
  )
}

export default Signup
