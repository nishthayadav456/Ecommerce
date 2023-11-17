


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup(){
 const navi=useNavigate()   

  const [data, setData] = useState(
    {
        name: "",
        phone: "",
        email: "",
        password: ""
    }
)
  
  const changeHandle = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
}
  const handleClick=(e)=>{
    e.preventDefault()
    console.log(data)
    axios.post("http://localhost:4000/api/register",data)
   
    .then((res)=>{
      
      alert(res.data.msg);
      setData(res.data);
      localStorage.setItem("token",res.data.token)
    })
    .catch(err=>console.log(err))
    setData({
        name: "",
        phone: "",
        email: "",
        password: ""
    })
navi("/login")
  }

  return(
      <>
      
      <form>
      <h1>REGISTER FORM</h1>
          <label htmlFor="name">Name : </label>
          <input  type="text" placeholder="Enter your name" value={data.name} id="name" name="name" onChange={changeHandle}/>
          <label  htmlFor="phone">Phone : </label>
          <input  type="text" placeholder="Enter your phone number"value={data.phone} id="phone" name="phone" onChange={changeHandle} />
          <label  htmlFor="email">Email : </label>
          <input type="email" placeholder="Enter your email" value={data.email} id="email" name="email" onChange={changeHandle}/>
          <label  htmlFor="password">Password : </label>
          <input type="password" placeholder="Enter your password" value={data.password} id="password" name="password" onChange={changeHandle}/>
          <button className="btn1"  onClick={handleClick}>Signup</button>
          
      </form>
      </>
  )
 
}
export default  Signup;