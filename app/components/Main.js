import React from 'react';
import Nav from './Nav';
import '../styles/main.css'

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
    console.log(this.state);
    return(
      <div className='main'>
      <Nav />
      {React.cloneElement(this.props.children, {updateCartID:this.updateCartID.bind(this), cartId: this.state.cartId })}
      </div>
    )
  }
}

export default Main;
