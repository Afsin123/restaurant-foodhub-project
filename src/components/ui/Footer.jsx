import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import logo from '../../../static/logo.png';
import * as ROUTE from 'constants/routes';

const Footer = ({ path }) => {
  // hide the footer to these routes
  const hiddenPaths = [
    '/signin',
    '/signup',
    '/forgot_password',
    '/account',
    '/account/edit',
    '/checkout/step1',
    '/checkout/step2',
    '/checkout/step3'
  ];

  return hiddenPaths.includes(path) ? null : (
    <footer className="footer">

<div className="container">
                <div className="row">   

                    <div className="col-3 offset-1">
                        <h5>LINKS</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-3 offset-1">
                        <h5>  OUR ADDRESS</h5>
                        <address>
                            ABC Street <br />
                            WXY Way <br />
                            California <br />
                            <i className="fa fa-phone fa-lg"></i> +12345678 <br/>
                            <i className="fa fa-fax fa-lg"></i> +987654321<br />
                            <i className="fa fa-envelope fa-lg"></i> <a href="mailto:admin@foodhub.net">
                                </a>
                        </address>
                    </div>

                    <div className="col-3 offset-1 align-self-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                            <i className="fa fa-facebook-f"></i>
                        </a>&nbsp;
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>&nbsp;
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <i className="fa fa-instagram"></i>
                        </a>&nbsp;
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube"></i>
                        </a>&nbsp;
                        <a className="btn btn-social-icon btn-vk" href="http://vk.com/">
                            <i className="fa fa-vk"></i>
                        </a>&nbsp;
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"> 
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">             
          <div className="col-auto">
         
                        {/* <p>© Copyright 2020 Restaurant FoodHub</p> */}
                    </div>
                </div>
            </div>
      
      
      <div className="footer-col-2">
        {/* <img src={logo} /> */}
        <h5>&copy;&nbsp;{new Date().getFullYear()}</h5>
      </div> 
      {/* <p style={{ textAlign: "center", color: "", padding:"1rem" }}>
          Copyright © 2020 FoodHub. All rights reserved
          </p> */}
          
    </footer>
  );
};

export default Footer;