import React, { Component } from "react";
import ProductList from "./productList";
// import {data} from "./data";


class Filter extends Component{

  state={
    product : data,
    productCopy :[],
  }
//filter button
handleBtn =(e)=>{
  console.log(e.target.value);
  let productCopy;
  if(e.target.value==="All"){
    productCopy =this.state.product;
  }
  else{
    productCopy=this.state.product.filter(item=>item.title===e.target.value)
  }
  this.setState({
    productCopy:productCopy
  })
}
  render(){
    return(
      <div>
        <ProductList product={this.state.productCopy} handleBtn={this.handleBtn}/>
      </div>
    )
  }
}

export default Filter;