import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ad error nesciunt placeat in quia, maiores sint quaerat earum quisquam, deserunt nostrum beatae ipsa, fugiat atque. Maxime reprehenderit harum debitis!</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Private Policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-321-456-3298</li>
                        <li>contactus@toamto.com</li>
                    </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">copyright 2024 Tomato.com All rights reaserved</p>
      
    </div>
  )
}

export default Footer
