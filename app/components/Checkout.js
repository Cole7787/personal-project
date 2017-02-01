import React from 'react';
import {Link} from 'react-router';
import ItemCheckout from './ItemCheckout.js';
import {Button} from 'react-materialize';
import axios from 'axios';


class Checkout extends React.Component{

        constructor(props){
          super(props);
          this.state = {
            items: [],
            subtotal: 0
          }
        }
        componentDidMount(){
          axios.get(`/api/cart/${this.props.cartId}`)
          .then(response =>{
            let subtotal = response.data.reduce((a,b)=>{
              return a+b.price;
            },0)
            this.setState({
              items: response.data,
              subtotal
            })
          })
        }

        renderCheckoutItem(){
          if(this.state.items.length){
            return this.state.items.map((val, index)=>{
              return(<ItemCheckout
                key={index}
                name={val.name}
                price={val.price}
                quantity={val.quantity}/>)
            })
          }
        }

        render(){
          return (
            <div className="maincontain">
              <div className="checkoutText">Checkout</div>

            {this.renderCheckoutItem()}
            <div className="paymentInfo">
              <div className="cardInfo">Visa ***5555</div>
              <hr className="firstLine"></hr>
              <div className="promoCode">
                <i className="material-icons">local_offer</i>
              <input className="promoInput" placeholder="Add a promo code"></input>
              </div>
              <hr className="secondLine"></hr>


                <div>Total Price: ${this.state.subtotal}.00</div>

                <Button waves="light" className="confirmPurchase">Confirm Purchase</Button>
            </div>
          </div>
          )
        }
};

export default Checkout;
