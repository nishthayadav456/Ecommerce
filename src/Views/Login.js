
import { useState } from "react"

import axios from "axios"

function Login(){

   
    const [data, setData] = useState(
        {
           
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
        axios.post("http://localhost:4000/api/login",data)
        //  .then(res=>console.log(res.data))
         .then((res)=>{
          
            alert(res.data.msg);
            console.log(res.data)
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
     
      
      }
    
    return(
        <>
      
        <form>
        <h1>LOGIN FORM</h1>
            <label  htmlFor="email">Email : </label>
            <input type="email" placeholder="Enter your email" value={data.email} id="email" name="email" onChange={changeHandle}/><br/><br/>
            <label  htmlFor="password">Password : </label>
            <input  type="password" placeholder="Enter your password" value={data.password}id="password" name="password" onChange={changeHandle} /><br/><br/>
            <button className="btn1" onClick={handleClick}>login</button>
         
        </form>
        </>
    )
    }
    export default Login;
