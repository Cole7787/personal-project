import React from 'react';
import Nav from './Nav';

class Main extends React.Component{

constructor(props){
  super(props);
  this.state = {
    cartId:null
  }

}
updateCartID (newId){
  this.setState({cartId:newId})
}
  render(){
    return(
      <div>
      <Nav />
      {React.cloneElement(this.props.children, {updateCartID:this.updateCartID.bind(this), cartId: this.state.cartId })}
      </div>
    )
  }
}

export default Main;
// {this.renderProducts()}
