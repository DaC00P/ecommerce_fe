import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'react-redux';

import {fetchProducts} from '../actions/index';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    let products = this.props.products.products;
    if(!products.length){
      return(
        <div>
          Loading, please wait..
        </div>
      )
    }
    console.log(products)
    const listOfProfucts = products.map((product) => {
      console.log('MAP')
      return(
        <li key={product.name}>
          {product.name}
        </li>
      )
    });
    return(
      <ul>
        {listOfProfucts}
      </ul>
    )
  }

  render(){
    console.log(this.props)
    return(
      <div>
        {this.renderProducts()}
      </div>
    );
  }

}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, {fetchProducts})(ProductList)
