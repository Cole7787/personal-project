import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {browserHistory} from 'react-router'
import {Button} from 'react-materialize';
class Product extends React.Component {
constructor(props){
  super(props)
  this.addToCart = this.addToCart.bind(this)
}

addToCart(){
  axios.post('/api/cart', {cartId:this.props.cartId, productId: this.props.productId,quantity:1})
  .then(result => {
    this.props.update(result.data[0].cartid);
    browserHistory.push('precheck');
  })
}

  render(){
    return(
      <div className="product" style={{
        background:`url(${this.props.image}) no-repeat center #eeeeee`
      }}>
        <div className="homeName">{this.props.name}</div>
        <div className="homeDescription">{this.props.description}</div>
        <div className="homePrice">${this.props.price}</div>
        <Button className="homeButton" onClick={this.addToCart}>Add To Cart</Button>
      </div>
      )
  }
}

export default Product;
