import React from 'react';
import classes from './AvailableProducts.module.css';
import data from '../../product_data.json';
import ProductItem from './ProductItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const AvailableProducts = (props) => {
  const disPatch = useDispatch();
  const favouriteItems = useSelector((state) => state.cart.favouriteItems);

 

  console.log(favouriteItems);

  const heartClickHandler = (id) => {
    disPatch(cartActions.addFavouriteItem(id));
  };
  const productList = data.map((item) => (
    <ProductItem
      key={item.title}
      item={item}
      onHeartClick={heartClickHandler.bind(null, item.id)}
    />
  ));

  return <section className={classes.products}>{productList}</section>;
};

export default AvailableProducts;
