import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
  const params = useParams();

  console.log(params);

  let content = (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            className={classes.img}
            src="https://thumbs.dreamstime.com/b/shopping-basket-grocery-food-32542097.jpg"
          />
        </div>
        <div className={classes.details}>
          <p className={classes.title}>Title</p>
          <p className={classes.type}>Type</p>
          <p className={classes.description}>Description</p>
          <p className={classes.price}>Price</p>
        </div>
      </div>
    </div>
  );

  return <section>{content}</section>;
};

export default ProductDetail;
