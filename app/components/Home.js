import React from 'react';
import {Link} from 'react-router';
import Product from './Product/Product';
import '../styles/main.css';
import axios from 'axios';


class Home extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        products: []
      }
  }
  componentDidMount(){
    axios.get('/api/product')
    .then(response => {
      console.log(response);
      this.setState({
        products: response.data
      })
    })
  }

  renderProducts(){
    if(this.state.products){
      return this.state.products.map((product) => {
        return (<Product key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.imageurl}
          update={this.props.updateCartID}
          cartId={this.props.cartId}
          productId={product.id}/>)
      });
    }

  }

  render(){
    return (
        <div className="main">
          {this.renderProducts()}
        </div>
    )
  }
};

export default Home;
