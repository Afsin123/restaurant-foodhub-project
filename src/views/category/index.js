import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
//import classes from './HomePagemodule.css';
import ShopFood from '../../images/tofus.jpg';
import GlobalButton from "../../components/ui/GlobalButton/GlobalButton";
import "./category.css";

const Category = () => {
   useEffect(() => {
     document.title = `FoodHub|Home`;
   }, []);
 
   return (
      <div className='item'>
         
            
         
      </div> 
       
    );
  };
  

export default Category;
