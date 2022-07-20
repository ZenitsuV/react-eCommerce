import React from 'react';
import Card from '../../UI/Card';
import classes from './ProductItem.module.css';
import ProductForm from './ProductForm';
import HeartButton from '../../UI/HeartButton';

const ProductItem = (props) => {
  const price = `₹ ${props.item.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <Card key={props.item.title}>
      <div>
        <HeartButton />
      </div>
      <div>
        <img
          src="https://thumbs.dreamstime.com/b/shopping-basket-grocery-food-32542097.jpg"
          alt=""
          className={classes.image}
        />
      </div>
      <div className={classes.details}>
        <span>{props.item.title}</span>
        <span>{price}</span>
      </div>
      <div>
        <ProductForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </Card>
  );
};

export default ProductItem;