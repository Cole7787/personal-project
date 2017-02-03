import React from 'react';
import {Link} from 'react-router';
import ItemCheckout from './ItemCheckout.js';
import {Button} from 'react-materialize';
import axios from 'axios';

let userId = 1;


class Checkout extends React.Component{

        constructor(props){
          super(props);
          this.state = {
            items: [],
            subtotal: 0,
            total: 0
          }
        }
        componentDidMount(){
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

        renderCheckoutItem(){
          if(this.state.items.length){
            return this.state.items.map((cart, index)=>{
              return(<ItemCheckout
                key={index}
                name={cart.name}
                image={cart.imageurl}
                price={cart.price}
                subtotal={cart.subTotal}
                qty={cart.qty}/>)
            })
          }
        }

        render(){
          return (
            <div className="maincontain">
              <div className="checkoutText">Checkout</div>
              {this.renderCheckoutItem()}
            <div className="paymentInfo">
              <div className="promoCode">
                <i className="material-icons tag">local_offer</i>
              <input className="promoInput" placeholder="Add a promo code"></input>
              </div>
              <hr className="secondLine"></hr>


                <div className="total">Total Price: ${this.state.subtotal}.00</div>
                <Button waves="light" className="confirmPurchase">Confirm Purchase</Button>

            </div>
          </div>
          )
        }
};

export default Checkout;
