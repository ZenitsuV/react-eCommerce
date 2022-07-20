import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  //const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, seBtnIsHighlighted] = useState(false);
  //const { items } = cartCtx;
  /* const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);  */

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;
  /*
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    seBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      seBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]); */

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{0}</span>
    </button>
  );
};

export default HeaderCartButton;
