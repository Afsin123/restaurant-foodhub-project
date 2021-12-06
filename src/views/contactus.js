
// import React, { Component } from 'react'
// import * as emailjs from 'emailjs-com';


// export class contactus extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          name: " ",
//          phone: " ",
//          email: " ",
//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//    }
//    handleChange = (e) => {
//       this.setState({
//          [e.target.name]: e.target.value
//       })
//    };
//    handleSubmit = (e) => {
//       e.preventDefault();
//       emailjs
//          .sendForm(
//             "gmail",
//             " template_qcbtier",
//             ".contact_form_class",
//             " user_gZmOXtq7ODlgX0vXpknV4 ",

//             // "gmail service id",
//             // "template Id",
//             // ".contact_form_class/ selector parameter",
//             // " emailjs userid",
            
//          )
//          .then()
//          .catch();
//       this.setState({
//          name: " ",
//          phone: " ",
//          email: " ",
//       });
     
//    }
//    render() {
//       return (
//          <div>
//             <form
//                onSubmit={this.handleSubmit.bind(this)}
//                className=" contact_form_class" 
//             >
               
//                   <label> Name: </label>
//                   <input type=" text"
//                      id="name"
//                      name="name"
//                      placeholder="Enter your Name"
//                      value={this.state.name}
//                      onChange = {this.handleChange.bind(this)}
//                   >
//                   </input>
                 
//                <p> </p>
               
//                   <label> Phone: </label>
//                   <input type=" text"
//                      id="phone"
//                      name="phone"
//                      placeholder="Enter your phonenumber"
//                      value={this.state.phone}
//                      onChange = {this.handleChange.bind(this)}
//                   >
//                   </input>
               
               
//                   <label> Email: </label>
//                   <input type=" text"
//                      id="email"
//                      name="email"
//                      placeholder="Enter your Email"
//                      value={this.state.email}
//                      onChange = {this.handleChange.bind(this)}
//                   >
//                   </input>
//                   <p> </p>
//                   <input type = "submit"> </input>
               
            
//             </form>
//          </div>
//       )
//    }
// }

// export default contactus

import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class contactus extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
             e.preventDefault();
             emailjs
                .sendForm(
                   "gmail",
                   " template_qcbtier",
                 ".contact_form_class",
                   " user_gZmOXtq7ODlgX0vXpknV4 ",
                )
                   .then()
          .catch();
       this.setState({
          name: " ",
          phone: " ",
         email: " ",
       });
     
    }
      
   //  handleSubmit(values) {
   //      console.log("Current State is: " + JSON.stringify(values));
   //      this.props.postFeedback(values);
   //      this.props.resetFeedbackForm();
   //  }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-11 offset-1">
                        <h5>Our Address</h5>
                        <address>
                            123, ABC Road<br />
                            CDF Street <br />
                            California <br />
                            <i className="fa fa-phone"></i>: +123 456 789<br />
                            <i className="fa fa-fax"></i>: +123 456 789 <br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:admin@foodhub.com">admin@foodhub.com</a>
                        </address>
                    </div>
                    {/* <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div> */}
                    <div className="col-11 offset-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:admin@foodhub.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 mb-4">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            {/* <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row> */}
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default contactus;

