import React from 'react'
import './header.css'
import img1 from '../../Assets/img1.png'

const Header = () => {
    return (
        <section id="header">
        <div className="container header_container">
            <div className="header_textcontent">
                <div className="header_head">
                    WEBSITE DEVELOPMENT
                </div>
                <div className="header_title">
                    Scalable & Seamless Web Development
                </div>
                <div className="header_text">
                    Engage users with lightning-fast and reliable Progressive Web Apps. 
                    We harness the power of modern web technologies to deliver app-like 
                    experiences directly through browsers.
                </div>
            </div>
            <div className="header_image">
                <img src={img1} alt="" />
            </div>
        </div>
        </section>
    )
  }

export default Header
