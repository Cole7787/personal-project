import React from 'react';
import {Link} from 'react-router';
import '../styles/preCheck.css';
import {Button} from 'react-materialize';
import './Product/Product';
import axios from 'axios';
import './CartItem.js';

class PreCheckout extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      cartItem: []
    }
    console.log(this.props);
  }

  componentDidMount(){
    // axios.get(`/api/cart/${this.props.cartId}`)
    // .then(response =>{
    //   this.setState({
    //   cartItem: response.data
    //   })
    // })
  }

  renderCartItem(){
    if(this.state.cartItem){
      return this.state.cartItem.map((cartItem)=>{
        return(<CartItem
          key={cartItem.cartId}
          quantity={cartItem.quantity}/>)
      })
    }
  }


  render(){
    return(
    <div className="outColor">
    // {this.props.cartId}
      <div className="maincontain">
        <div className="yourcart">Your cart</div>
        <div className="productbox">
          <div className="productImg"></div>
          <div className="productTitle"></div>
          <div className="productPrice"></div>
          <div className="quantity">Quantity</div>
          <div className="trash">Trash</div>
        </div>
        {this.renderCartItem()}
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
