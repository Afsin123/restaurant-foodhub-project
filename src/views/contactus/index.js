import React, { Component } from 'react'
// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';


export class index extends ContactUs {
  render() {
    return (
      <div>
        <h3> Contact Us </h3>
      </div>
    )
  }
}

export default ContactUs



// import React from 'react';
// import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// import './style.css';

// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_rjcrnub', e.target, 'user_gZmOXtq7ODlgX0vXpknV4')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       {/* <input type="submit" value="Send" /> */}
//       <Button type="submit" color="primary">
//         Send Feedback
//       </Button>
//      </form>
     
   
//   );
// }