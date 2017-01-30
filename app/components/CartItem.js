import React from 'react';
import {Link} from 'react-router';
class CartItem extends React.Component {

  render(){
    return(
      <div className="product" style={{
        background:`url(${this.props.image}) no-repeat center #eeeeee`
      }}>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        <div>${this.props.price}</div>
        <div>{this.props.quantity}</div>
      </div>
      )
  }
}

export default CartItem;
