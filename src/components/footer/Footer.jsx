import React from 'react'
import logo from '../../Assets/logo.png';
import './footer.css';
import { BsLinkedin, BsFacebook, BsWhatsapp, BsInstagram, BsEnvelope, } from 'react-icons/bs'
import { BiPhone, BiSolidLocationPlus } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="container">
      <div className="container_footer">
        <div className="column">
          <div className="footer_logo">
            <img src={logo} alt="" />
            <spam>MetaLogic</spam>
          </div>
          <div className="footer_content">
              <ul>
                <li><BiSolidLocationPlus className='rr'/> Saptakhel, Lalitpur (Head office)</li>
                <li><BiPhone/>  + 977 9851353599</li>
                <li><BsEnvelope/>  info@metalogic.com.np</li>
              </ul>
            </div>

        </div>
        <div className="column">
          <div className="footer_top">
            <div className="footer_title">
              <h3>Company</h3>
            </div>
            <div className="footer_content">
              <ul>
                <li><a href="">Feedback</a></li>
                <li><a href="">Partnership</a></li>
                <li><a href="">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="footerbottom">
            <div className="footer_title">
              <h3>Join</h3>
            </div>
              <div className="footer_content">
                <ul>
                <li><a href="">Careers at MetaLogic</a></li>
                <li><a href="">Internship</a></li>
                </ul>
              </div>
            </div>
        </div>
        <div className="column">
          <div className="footer_title">
            <h3>Service</h3>
          </div>
          <div className="footer_content">
            <ul>
              <li><a href="">Custom Software Development</a></li>
              <li><a href="">Web Development</a></li>
              <li><a href="">Mobile App Development</a></li>
              <li><a href="">Cloud Computing Service</a></li>
              <li><a href="">Quality Assurance And Testing</a></li>
              <li><a href="">UI/UX Desgining</a></li>
              <li><a href="">Mantainance And Support</a></li>
              <li><a href="">Dev Ops</a></li>
              <li><a href="">Blockchain Solution</a></li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="footer_title">
            <h3>Join us on Social Medias</h3>
          </div>
          <div className="footer_content">
            <div className="footer_socialicons">
              <BsWhatsapp/>
              <BsFacebook/>
              <BsInstagram/>
              <BsLinkedin/>
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Footer
