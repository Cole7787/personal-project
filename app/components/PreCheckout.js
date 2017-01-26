import React from 'react';
import {Link} from 'react-router';
import '../styles/preCheck.css';
import {Button} from 'react-materialize';

class PreCheckout extends React.Component{
  render(){
    return(
    <div className="outColor">
      <div className="maincontain">
        <div className="yourcart">Your cart</div>
        <div className="productbox">
          <div className="productImg">Img</div>
          <div className="productTitle">Title</div>
          <div className="productPrice">Price</div>
          <div className="quantity">Quantity</div>
          <div className="trash">Trash</div>
        </div>
        <hr className="line"></hr>
        <div className="subtotal">
          <h6>Subtotal</h6>
          <div className="subtotalAmount">Real subtotal</div>
        </div>
        <br/>
        <h6>Tax and shipping will be calculated at checkout.</h6>
        <Link to='checkout'>
          <Button waves='light' className="checkout"><i className="material-icons">shopping_cart</i>Check out</Button>
        </Link>
      </div>
    </div>
    )
  }
};

export default PreCheckout;
