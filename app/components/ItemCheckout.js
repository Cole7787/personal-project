import React from 'react';
import {Link} from 'react-router';
import '../styles/checkout.css';
import {Button} from 'react-materialize';



class ItemCheckout extends React.Component{

constructor(props){
  super(props);
}

Clicked = (e) => {
  let price = this.props.price
  console.log(e.target.value, 'this is the target value');
  this.props.increaseQty(this.props.itemId, e.target.value);
}

handleDelete = () =>{
  this.props.delete(this.props.itemId)
}


  render(){
    return (

      <div className="">
        <div className="items">
          <img className="checkImg" src={this.props.image} />
          <div className="checkTitle">{this.props.name}</div>
          <div className="productContain">
            <div className="checkPrice">${this.props.subtotal}.00</div>
            <input type="number" id="qty" className="checkQuantity" value={this.props.qty} onChange={this.Clicked}></input>
            <div className="checkTrash" onClick={this.handleDelete}><i className="material-icons">delete</i></div>
        </div>
      </div>


      </div>

    )
  }

}

export default ItemCheckout;
