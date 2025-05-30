import React from 'react'
import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
            <div className="container">
                <div className="about-us">
                    <h2>About us</h2>
                    <p>The CharityTrace leverages cutting-edge technology to revolutionize the donation process. By ensuring transparency, trust, and efficiency, this platform has the potential to transform how charities operate and how donors engage with them.</p>
                </div>
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Stay update with our latest</p>
                    <div className="form-element">
                        <input type="text" placeholder="Email"/><span><i className="fa fa-chevron-right"></i></span>
                    </div>
    
                </div>
    
                <div className="follow">
                    <h2 >Follow us</h2>
                    <p></p>
                    <div className="icon">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>                        
                        <i className="fa fa-youtube-play"></i>
                    </div>
                </div>
            </div>
            <div className="rights flex-row">
                <h3 className="">
                    Copyright © All rights reserved 
                </h3>
            </div>
            {/* <!-- <div className="move-up">
                <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
            </div> --> */}
        </footer>
  )
}
