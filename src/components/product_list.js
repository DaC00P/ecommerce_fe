import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'react-redux';

import {fetchProducts} from '../actions/index';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    if(!this.props.products){
      return(
        <div>
          Loading, please wait..
        </div>
      )
    }
    const listOfProfucts = this.props.products.map((product) => {
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
    return(
      <div>
        {this.renderProducts()}
      </div>
    );
  }

}

function mapStateToProps({state}) {
  return {
    products: state
  }
}

export default connect(mapStateToProps, {fetchProducts})(ProductList)
