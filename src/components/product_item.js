import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/actions';

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct();
  }

  render() {
    console.log('rendering');
    return(
      <div>
        <h2>{product.name}</h2>
        <ul>
          <li>{product.description}</li>
          <li>{product.numberRemaining}</li>
          <li>{product.categories}</li>
          <li>{product.price}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => (
  { product }
);

export default connect(mapStateToProps, {fetchProduct})(ProductItem);