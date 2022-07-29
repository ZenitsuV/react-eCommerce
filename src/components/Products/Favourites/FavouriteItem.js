import React from 'react';
import classes from './FavouriteItem.module.css';

const FavouriteItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes.favourite}>
      <div>
        <h3>{props.item.title}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default FavouriteItem;
