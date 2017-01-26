import React from 'react';
import {Link} from 'react-router';
var MainContainer = require('./MainContainer.js');
import Product from './Product/Product';
import '../styles/main.css';


class Home extends React.Component{

  // constructor(props){
  //   super(props);
  //   // this.data = axios.get('/myproducts]');
  //
  //   this.data = [{name:'hi',price:300}]
  //
  // }
  // renderProducts = ()=>{
  //   return this.data.map(datum => {
  //     return (<Product name={datum.name}/>)
  //   });
  // }
  render(){
    return (
        <div className="main">
          <Product/>
        </div>
    )
  }
};

module.exports = Home;
