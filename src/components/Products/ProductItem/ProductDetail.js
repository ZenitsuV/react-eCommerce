import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetail.module.css';
import data from '../../../product_data.json';
import ProductForm from './ProductForm';

const ProductDetail = (props) => {
  const params = useParams();

  const productData = data.filter((item) => item.id === params.productId);
  const { title, type, description, price } = productData[0];

  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

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
          <div>
            <p className={classes.title}>{title}</p>
            <p className={classes.type}>{capitalize(type)}</p>
            <p className={classes.description}>{description}</p>
            <p className={classes.price}>₹{price}</p>
          </div>
          <div className={classes.form}>
            <ProductForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );

  return <section>{content}</section>;
};

export default ProductDetail;
