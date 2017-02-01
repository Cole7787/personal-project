import React from 'react';
import {Link} from 'react-router';
import '../styles/cartItem.css';
import {Button} from 'react-materialize';
import './Product/Product';
import axios from 'axios';
import CartItem from './CartItem.js';

class PreCheckout extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      items: [],
      subtotal:0
    }
    console.log('the props', this.props);
  }

  componentDidMount(){

    axios.get(`/api/cart/${this.props.cartId}`)
    .then(response =>{
      console.log('b', response.data);
      let subtotal = response.data.reduce((a,b)=>{
        console.log(a,b);
        return a+b.price;
      },0)
      console.log(subtotal);
      this.setState({
      items: response.data,
      subtotal
      })

    })
  }

  renderCartItem(){
    console.log('cartItem', this.state.cartItem);
    if(this.state.items.length){
      return this.state.items.map((val, index)=>{
        console.log('testing');
        return(<CartItem
          key={index}
          image={val.imageurl}
          name={val.name}
          price={val.price}
          quantity={val.quantity}/>)
      })
    }
  }


  render(){
    return(
        <div className='maincontain'>
          <div className="yourcart">Your cart</div>

          {this.renderCartItem()}

          <hr className="line"></hr>
          <div className="subtotal">
            <h6>Subtotal</h6>
            <div className="subtotalAmount">${this.state.subtotal}.00</div>
          </div>

          <br/>
          <div className="tax">Tax and shipping will be calculated at checkout.</div>
          <Link to='checkout'>
            <Button waves='light' className="checkout"><i className="material-icons">shopping_cart</i>{' '}Check out</Button>
          </Link>
        </div>
    )
  }
};

export default PreCheckout;
