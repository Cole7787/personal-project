import React from 'react';
import {Link} from 'react-router';
import '../styles/checkout.css';
import {Button} from 'react-materialize';


class ItemCheckout extends React.Component{
  render(){
    return (

      <div className="">
        <div className="items">
          <div className="checkImg">{this.props.imageurl}</div>
          <div className="checkTitle">{this.props.name}</div>
          <div className="checkPrice">Price: ${this.props.price}.00</div>
          <div className="checkQuantity">Quantity: {this.props.quantity}</div>
          <div className="checkTrash"><i className="material-icons">delete</i></div>
        </div>

        <div className="shippingInfo">
          <h6>Choose shipping address</h6>
          <div className="shippingAddress"></div>
          <div className="shippingMethod">
            <h6>Standard '$0.00'</h6>
            </div>
          </div>


      </div>




    )
  }

}

export default ItemCheckout;
