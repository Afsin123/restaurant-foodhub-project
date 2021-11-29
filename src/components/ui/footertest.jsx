import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function footertest() {
   return (
      <div>
         <footer className="bg-ff-footer text-white address">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mr-5">
                <ul>
                  <span>Authors</span>
                  <li>Person1</li>
                  <li>Person2</li>
                  <li>Person3</li>
                  <li>Person4</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mr-5">
                <ul className="social">
                  <span>Project's repository</span>
                  {/* <li>
                    <a href="https://github.com/germanreyga/Restaurant-app">
                      <img
                        alt="Qries"
                        src="https://boxboat.com/assets/wf/images/github.9412ae55426a.png"
                        width="50"
                        height="50"
                      />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <ul className="social">
                  <span>Social media</span>
                  <li>
                    <img alt="Facebook" src={fb} className="social-icons" />
                  </li>
                  <li>
                    <img alt="twitter" src={tw} className="social-icons" />
                  </li>
                  <li>
                    <img alt="instagram" src={ig} className="social-icons" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ToastContainer />
        </footer>
      </div>
   )
}

export default footertest;

   



