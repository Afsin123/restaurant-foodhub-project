import React from 'react';
import { Link } from "react-router-dom";
import pizza from '../../../static/istockphoto-938742222-612x612.jpg';
import veg from '../../../static/veg-thali.jpg';
import nonveg from '../../../static/Grilled-Tandoori-Chicken_-6.jpg';
import './category.scss';


const Category=() =>{
   return (
      <div className = 'container'>
          CATEGORIES
         <div className="title">
         </div>
         
         <div className="grid-container">
        <div className="menu-item">
          <img className="background-image" src={pizza} alt=""></img>
          <div className="middle">    
                  <div className=".title">
                  {/* <div className='content'> */}
                        {/* <span className='subtitle'>PIZZA </span> */}
                        {/* </div>  */}
              {/* <Link to="/">PIZZA</Link> */}
            </div>
          </div>
        </div>
         </div>
         <div className="menu-item">
          <img className="background-image" src={nonveg} alt=""></img>
          <div className="middle">
            {/* <div className="subtitle">
              <Link to="/">NON VEG</Link>
            </div> */}
          </div>
        </div>
         

        <div className="menu-item">
          <img className="background-image" src={nonveg} alt=""></img>
          <div className="middle">
            {/* <div className="subtitle">
              <Link to="/">NON VEG</Link>
            </div> */}
          </div>
        </div>
      </div> 
      
     
   )
}

export default Category;

