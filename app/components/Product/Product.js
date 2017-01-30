import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {browserHistory} from 'react-router'
class Product extends React.Component {
constructor(props){
  super(props)
  this.addToCart = this.addToCart.bind(this)
}

addToCart(){
  axios.post('/api/cart', {cartId:this.props.cartId, productId: this.props.productId,quantity:1})
  .then(result => {
    console.log(result);
    this.props.update(result.data[0].cart);
    browserHistory.push('precheck');
  })
}

  render(){
    return(
      <div className="product" style={{
        background:`url(${this.props.image}) no-repeat center #eeeeee`
      }}>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        <div>${this.props.price}</div>
        <button  onClick={this.addToCart}>Add To Cart</button>
      </div>
      )
  }
}

export default Product;
