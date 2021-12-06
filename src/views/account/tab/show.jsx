import React from 'react';

const ShowOrders = (props) =>{
    return(
        <div>
            <div className="product-form-inputsadmin">
                <div className="d-flex">
                    <div className="product-form-fieldproductname">
                        <h2>Product Name</h2>
                        <h5>{props.name.map(item=>
                            <div>
                                <p style={{ color: "white" }}>{item}</p>
                                <br/>
                            </div>
                            )}</h5>
                    </div>
                    <div className="product-form-fieldproductname">
                        <h2 >Price</h2>
                        <h5>{props.price.map(item=>
                            <div>
                                <p style={{ color: "white" }}>{item}</p>
                                <br/>
                            </div>
                            // marginTop:"0px", ,  backgroundColor:"black"}}
                            )}</h5>
                    </div>
                    <div className="product-form-fieldproductname">
                        <h2 style={{ color: "white", marginTop:"0px" }}>Order Id</h2>
                        <h5>{props.price.map(item=>
                            <div>
                                <p style={{ color: "white", }}>{item}</p>
                                <br/>
                            </div>
                            // marginTop:"0px", ,  backgroundColor:"black"}}
                            )}</h5>
                    </div>
                </div>
            </div>


        </div>
    )
};
export default ShowOrders;
