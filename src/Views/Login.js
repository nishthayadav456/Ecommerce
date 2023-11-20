
import { useState } from "react"
import './Style.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login(){
  const navi=useNavigate()   
   
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
        axios.post("https://e-commerce-nwyx.onrender.com/api/login",data)
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
        navi("/")
       
      }
    
    return(
        <>
      
        <form>
        <h1 className="formheading">LOGIN </h1>
        <p>Login now and get full access to our app</p>
            <label  htmlFor="email">Email : </label>
            <input className="input-bar" type="email" placeholder="Enter your email" value={data.email} id="email" name="email" onChange={changeHandle}/><br/><br/>
            <label  htmlFor="password">Password : </label>
            <input className="input-bar"  type="password" placeholder="Enter your password" value={data.password}id="password" name="password" onChange={changeHandle} /><br/><br/>
            <button className="btn1" onClick={handleClick}>login</button>
            
         
        </form>
        </>
    )
    }
    export default Login;
