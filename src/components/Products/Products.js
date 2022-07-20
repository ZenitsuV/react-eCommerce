import React, { Fragment } from 'react';
import ProductSummary from './ProductSummary';
import AvailableProducts from './AvailableProducts';

const Products = (props) => {
  return (
    <Fragment>
      <ProductSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
