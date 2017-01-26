import React from 'react';
import {Link} from 'react-router';
import './Product.css'

class Product extends React.Component {

  render(){
    return(
      <div className="product">
        <div>Product Name</div>
        <div>Info</div>
        <div>Product Price</div>
        <Link to='precheck'>Add To Cart</Link>
      </div>
      )
  }
}

export default Product;
