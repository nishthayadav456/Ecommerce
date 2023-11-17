import React from 'react'
import { useNavigate } from 'react-router-dom'
const Top = () => {
  const navigate=useNavigate();
  const ToHome=()=>{
    navigate('/')
  }
  return (
     <div onClick={ToHome} className='header'>
    
    </div>
    
  )
}
export default Top