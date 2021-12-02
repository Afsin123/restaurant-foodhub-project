import React from 'react';
import classes from './GlobalButton.module.css';
import styled from 'styled-components';

const GlobalButton = (props) => {
   return (
     <button
       type={props.type}
       onClick={props.onClick}
       className={`${classes.button} ${props.userClass}`}
     >
       {props.children}
     </button>
   );
 };
 
 export default GlobalButton;