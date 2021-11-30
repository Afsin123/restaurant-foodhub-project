import React from "react";
import { Link } from "react-router-dom";
import menu3 from "../../../static/menu3.jpg";
import veg from "../../../static/veg-thali.jpg";
import nonveg from "../../../static/Grilled-Tandoori-Chicken_-6.jpg";
import "./category.scss";

const Category = () => {
   return (
      <div className='menu'>
        <img className="background-image" src={menu3} alt=""></img>
     </div>
  )
};

export default Category;
