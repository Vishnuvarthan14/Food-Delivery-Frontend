import React, { useState } from 'react'
import './Login_popup.css'
import { assets } from '../../assets/assets'
const Login_popup = ({setShowLogin}) => {

    const [currenstate,setCurrentState]=useState("Sign Up")
  return (
<div className='Login_popup'>
     <form className="Login_popup_container">
        <div className="Login-popup-title">
            <h2>{currenstate}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login_popup_inputs">
           { currenstate==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currenstate==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login_popup_condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & Privacy Policy</p>
        </div>
        {
            currenstate==="Login"
            ? <p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
            : <p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
        }
    </form>
      
  </div>
  )
}

export default Login_popup
