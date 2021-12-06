import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./foodsee.png";
import "./category.css";

const Category = () => {
   return (
     <div className="banner">
       <Container>
         <Grid container spacing={4}>
           <Grid item xs={12} sm={6}>
             <Typography className="title" variant="h3">
               <p>I am ordering it..</p>
               <p> FoodHub</p>
                  </Typography>
                  <Typography className="title" variant="h4">
              
             </Typography>
             <Button className="shopping-button" href="/home">
               VIEW MENU
             </Button>
           </Grid>
           <Grid className="brand" item sm={6}>
             <img src={logo} alt="Brand-tv" />
           </Grid>
         </Grid>
       </Container>
     </div>
   );
 };
 
 export default Category;








// import React from "react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// //import classes from './HomePagemodule.css';
// import ShopFood from '../../images/tofus.jpg';
// import GlobalButton from "../../components/ui/GlobalButton/GlobalButton";
// import "./category.css";

// const Category = () => {
//    useEffect(() => {
//      document.title = `FoodHub|Home`;
//    }, []);
 
//    return (
//       <div className='item'>
         
            
         
//       </div> 
       
//     );
//   };
  

// export default Category;

