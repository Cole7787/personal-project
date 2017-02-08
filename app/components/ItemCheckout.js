import React from 'react';
import {Link} from 'react-router';
import '../styles/checkout.css';
import {Button} from 'react-materialize';


class ItemCheckout extends React.Component{

constructor(props){
  super(props);
}

  render(){
    return (

      <div className="">
        <div className="items">
          <img className="checkImg" src={this.props.image} />
          <div className="checkNameQty">
          <div className="checkTitle">{this.props.name}</div>
            <div className="checkQuantity">Quantity: {this.props.qty}</div>
            </div>
          <div className="productContain">
            <div className="checkPrice">${this.props.subtotal}.00</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemCheckout;
