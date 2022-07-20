import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableProducts.module.css';

const AvailableProducts = (props) => {
  return (
    <section className={classes.products}>
      <Card>
        <div>
          <img src="#" alt="" />
        </div>
        <div>
          <span>Product Name</span>
          <span>Price</span>
        </div>
      </Card>
    </section>
  );
};

export default AvailableProducts;
