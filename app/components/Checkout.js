import React from 'react';
import {Link} from 'react-router';
import '../styles/checkout.css';
import {Button} from 'react-materialize';

class Checkout extends React.Component{
  render(){
    return (
    <div className="backColor">
      <div className="maincontainer">
        <div className="checkoutText">Checkout</div>
        <div className="items">
          <div className="checkImg">Img</div>
          <div className="checkTitle">Title</div>
          <div className="checkPrice">Price</div>
          <div className="checkQuantity">Quantity</div>
          <div className="checkTrash">Trash Icon</div>
        </div>
        <div className="shippingInfo">
          <h6>Choose shipping address</h6>
          <div className="shippingAddress"></div>
          <div className="addNewAddress">
            <h6>Add shipping address</h6>
          </div>
          <div className="shippingMethod">
            <h6>Standard '$0.00'</h6>
            <h6>Estimated delivery: January 31 - February 2, 2017</h6>
            </div>
        </div>
        <div className="paymentInfo">
          <div className="cardInfo">Visa ***5555</div>
          <hr className="firstLine"></hr>
          <div className="promoCode">
            <input className="promoInput" placeholder="Add a promo code"></input>
          </div>
          <hr className="secondLine"></hr>
          <div className="itemSubtotal">Subtotal</div>
          <div className="shipPrice">Shipping Price</div>
          <div className="tax">Tax</div>
          <div className="totalPrice">Total Price</div>
          <h6>By clicking 'Confirm Purchase'</h6>
          <Button waves="light" className="confirmPurchase">Confirm Purchase</Button>
        </div>
      </div>
    </div>
    )
  }
};

export default Checkout;
