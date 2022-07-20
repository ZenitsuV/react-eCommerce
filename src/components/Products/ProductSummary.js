import React from 'react';
import classes from './ProductSummary.module.css';

const ProductSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Quality Products, Delivered To You</h2>
      <p>
        Online shopping or e-shopping is searching for and purchasing goods and
        services over the Internet through the use of a web browser.
      </p>
      <p>
        The main allure of online shopping is that consumers can find and
        purchase items they need (which are then shipped to their front door)
        without ever leaving the house.
      </p>
    </section>
  );
};

export default ProductSummary;
