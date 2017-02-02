import React from 'react';
import {Link} from 'react-router';
import '../styles/cartItem.css';
import {Button} from 'react-materialize';
import './Product/Product';
import axios from 'axios';
import CartItem from './CartItem.js';
let userId = 1;

class PreCheckout extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      total: 0,
      subtotal: 0,
      qty: 1
    }
  }

  getData(){
    axios.get(`/api/cart/${userId}`)
    .then(response =>{
      let total = response.data.reduce((a,item)=>{
        item.subTotal = item.qty * item.price
        return a+item.subTotal;
      },0)
      this.setState({
      items: response.data,
      total
      })
    })
  }

  componentDidMount(){
    this.getData()
  }

  updateSubtotal() {
    let total = this.state.items.reduce((a,item)=>{
      item.subTotal = item.qty * item.price
      return a+item.subTotal;
    },0)
    this.setState({
      total
    })
  }

  increaseQty = (id, qty) => {

    axios({
      method: 'PUT',
      url: '/api/cart/' + id,
      data: {qty:Number(qty)}
    }).then(r => {
      this.getData()

    })

  }

  renderCartItem(){
    if(this.state.items.length){
      return this.state.items.map((val, index)=>{

        return(<CartItem
          key={index}
          itemId={val.id}
          image={val.imageurl}
          name={val.name}
          price={val.price}
          qty={val.qty}
          subtotal={val.subTotal}
          increaseQty={this.increaseQty}/>)
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
            <div className="subtotalAmount">${this.state.total}.00</div>
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
