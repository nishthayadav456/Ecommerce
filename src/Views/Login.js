
import { NavLink } from 'react-router-dom'


const Login = () => {
    
  return (
    <div>
      <div className='form-container'>
<h2>Login</h2>
<form action ='/login' method="get">
<div className='form-group'>
<label for="name">Name:</label>
<input type="text" id="name" name="username" placeholder="Enter your name" required/>
</div>
<div className='form-group'>
<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="password" required/>
</div>
<button type="submit" className='submit-btn'>Login</button>
</form>
<p>Don't have an account? <NavLink to="/signup">signup</NavLink></p>
      </div>
    </div>
  )
}

export default Login
