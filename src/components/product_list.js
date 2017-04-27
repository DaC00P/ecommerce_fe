import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
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

function mapStateToProps({products}) {
  return { products };
}

export default connect(mapStateToProps)(ProductList)
