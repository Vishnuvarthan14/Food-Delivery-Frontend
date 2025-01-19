import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Storecontext'
import { useContext } from 'react'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]= useState()
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /> </Link> 
      <ul className='navbar_menu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</Link>
        <a href='#Exploremenu' onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu=="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#Footer' onClick={()=>setMenu("Contactus")} className={menu=="Contactus" ?"active":""}>Contact us</a>
      </ul>
      <div className="nav_right">
        <img src={assets.search_icon} alt="" />
        <div className="nav_search">
            
        <Link  to='/cart'> <img src={assets.basket_icon} alt="" /> </Link> 
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className="sign_in">Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
