import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="MainFooter">
      <div className="FooterWidth">

<div className="GridCont">

      <div className="SecCon">
      
      {/* <div className="middleContainer"> */}
        <div className="middleSubCon">
          <div className="FDescription">
          <p className="heading">StoreM4</p>
           <p> StoreM4 powered By Mobirise</p>
           <p> STay Home - Shop Online</p>
<p>Where you can always find something you want...</p>
          </div>
          <div className="Copywrite">
           <p> <span>©</span>2023 All Rights Reserved Terms to use and privacy policy</p>
          </div>
          <div className="socialicons">
            < FaFacebookSquare className="social-icon"/>
          
          <FaInstagram className="social-icon"/>
          <FaTwitterSquare className="social-icon" />
          <FaLinkedin className="social-icon"/>
          </div>
         
        </div>
      {/* </div> */}
      </div>
     
      <div className="contact">
        <h3>Contact Us</h3>
        <div>
          Address Sec-C2 Paradise (Uttarakhand).
        </div>
        <div>
          <span className="PhoneEmoji"><img src="https://e7.pngegg.com/pngimages/54/563/png-clipart-mobile-phones-telephone-call-logo-others-miscellaneous-text-thumbnail.png" height="15px" width="15px" alt="Not found"/>Call</span> +91 8171840783
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span>  nishthayadav1122@gmail.com</pre>
        </div>
      </div>

      <div className="Refernce">
        <h3 className="References">Quick Links</h3>
        <div> <Link   className="Flinks"to="/mobile">Mobiles</Link></div>
        <div> <Link  className="Flinks" to="/laptop">Laptop</Link></div>
        <div> <Link  className="Flinks" to="/watches">watches</Link></div>
        <div>  <Link   className="Flinks"to="/accessories">Accessories</Link></div>
        <div> <Link   className="Flinks"to="/television">Television</Link></div>
      </div>
     
      </div>
</div>
    </div>
  );
};

export default Footer;
