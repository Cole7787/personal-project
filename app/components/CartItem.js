import React from 'react';
import {Link} from 'react-router';
import '../styles/cartItem.css';
import {Button} from 'react-materialize';
class CartItem extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log('this is the image', this.props.image);
    return(
        <div className="">
          <div className="productbox">
            <img className="productImg" src={this.props.image} />
            <div className="productTitle">{this.props.name}</div>
            <div className="productPrice">${this.props.price}.00</div>
            <div className="quantity">Quantity: {this.props.quantity}</div>
            <div className="trash"><i className="material-icons">delete</i></div>
          </div>
        </div>
      )
  }
}

export default CartItem;
