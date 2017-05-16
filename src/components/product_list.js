import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'react-redux';
import { browserHistory } from 'react-router';

import {fetchProducts} from '../actions/actions';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this);
    this.goToProduct = this.goToProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  goToProduct(id) {
    return () => {
      console.log('redirect');
      browserHistory.push(`/items`);
    }
  }

  renderProducts() {
    // TODO refactor state so its not so goddamn nested TODO
    console.log('RENDERPROD', this.props);
    let products = this.props.products.products;
    if(!products.length){
      return(
        <div>
          Loading, please wait..
        </div>
      )
    }
    const listOfProducts = products.map((product) => {
      console.log(product);
      return(
        <li key={product.name} onClick={this.goToProduct(product.id)}>
          {product.name}
        </li>
      )
    });
    return(
      <ul>
        {listOfProducts}
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

function mapStateToProps(state) {
  return {
      products: state.products.products
  }
}

export default connect(mapStateToProps, {fetchProducts})(ProductList)
