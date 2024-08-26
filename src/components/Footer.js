import React from "react";

import './Footer.css';
function Footer(){
    return(

        <footer>
        <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
        <h3>HappyChemical</h3>
    
        <a href="/Home">
            <p> Home</p>
        </a>
        <a href="/Shop">
            <p> Products</p>
        </a>
        <a href="/Contactus">
            <p>Contact us</p>
        </a>
        <a href="/Aboutus">
            <p>About us</p>
        </a>
        </div>
        <div className="sb_footer-links_div">
            <h3>Call us</h3>
            <p><i class="fa-solid fa-phone fa-beat"></i>
        </p>
        <p>+251920202020</p>
        
        <p>+2519202020120</p>
        </div>
        <div className="sb_footer-links_div">
            <h3>Follow us</h3>
            <div className="socialmedia">
        
            <i class="fa-brands fa-facebook"></i>
            
             <i class="fa-brands fa-telegram"></i>
      
            <i class="fa-brands fa-linkedin"></i>
        
            </div>

        </div>
        <div className="sb_footer-links_div">
            <h3>Address</h3>
            <p><i class="fa-solid fa-house"></i> Mexico </p>
            <br/>
        </div>
        </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
            <p> @{new Date ().getFullYear()} CodeInn.All right reserved. </p>
        </div>
        <div className="sb_footer-below_links">
            <a href="/terms"><div> <p> Terms&Conditions</p></div></a>
            <a href="/privacy"><div> <p> Privacy</p></div></a>
            <a href="/securty"><div> <p> Securty</p></div></a>
            <a href="/cookie"><div> <p> Cookies</p></div></a>
        </div>
        </div>
      
        </footer>
        );
    }
export default Footer;