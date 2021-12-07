import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./foodsee.png";
import "./category.css";

const Category = () => {
   return (
     <div className="banner">
       <Container  > 
         <Grid container spacing={0}>
           <Grid item xs={12}  >
           
             {/* <Typography className="title" variant="h3"> */}
             <div className="Quotes" style={{ fontFamily:"Open Sans Condensed"}} >
               <p style={{ fontSize: "30px"}}> "Feeling hungry?  We deliver deliciousness ease!!</p>
               <div> 
               <p style={{ fontSize: "30px", marginTop: 0, marginBottom: "20px", marginLeft: "250px" } } > FOODHUB </p>
               </div>
               <img src={logo} alt="Fooditem"/> 
             </div> 
                  {/* </Typography> */}
                  <Typography className="title" variant="h5">
              
             </Typography>
             <Button className="shopping-button" href="/home">
               VIEW MENU
             </Button>
           </Grid>
           {/* <Grid className="brand" item sm={6} style={{backgroundColor: "white"}} >
             <img src={logo} alt="Fooditem"  />
           </Grid> */}
         </Grid>

         <div>

         </div>
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

