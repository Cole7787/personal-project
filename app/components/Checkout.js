import React from 'react';
import {Link} from 'react-router';
import ItemCheckout from './ItemCheckout.js';
import {Button} from 'react-materialize';
import axios from 'axios';
import '../styles/checkout.css';
let userId = 1;
import swal from '../sweetalert.min.js';


class Checkout extends React.Component{

        constructor(props){
          super(props);
          this.state = {
            items: [],
            subtotal: 0,
            total: 0
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
          this.getData();
        }

        sweet(){
          swal("Success!", "Your order has been placed", "success");
        }

        renderCheckoutItem(){
          if(this.state.items.length){
            return this.state.items.map((cart, index)=>{
              return(<ItemCheckout
                key={index}
                itemId={cart.id}
                name={cart.name}
                image={cart.imageurl}
                price={cart.price}
                subtotal={cart.subTotal}
                qty={cart.qty}
                increaseQty={this.increaseQty}
                delete={this.clickedDelete}/>)
            })
          }
        }

        render(){
          return (
            <div className="maincontain">
              <div className="checkoutText">Checkout</div>
              {this.renderCheckoutItem()}
              <div className="shippingInfo">
                <div className="shipHeader">Shipping Information</div>
                  <hr className="secondLine"></hr>
                <input className="nameInput" placeholder="Full Name"></input>
                <input className="shippingAddress" placeholder="Street Address"></input>
                <input className="cityState" placeholder="City, State, Zip Code"></input>
                <input className="country" placeholder="Country"></input>
              </div>
            <div className="paymentInfo">
                <div className="paymentHeader">Payment Information</div>
                <hr className="secondLine"></hr>
                <input className="cardNumber" placeholder="Card Number"></input>
                <input className="expDate" placeholder="Expiration Date:  MM/YY"></input>
                <input className="ccv" placeholder="CCV"></input>

                <div className="total">Total Price: ${this.state.total}.00</div>
                <Button waves="light" className="confirmPurchase" onClick={this.sweet} type="submit" name="action">Confirm Purchase</Button>

            </div>
          </div>
          )
        }
};

export default Checkout;
