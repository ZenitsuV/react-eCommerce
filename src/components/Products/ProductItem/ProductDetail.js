import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
  const params = useParams();

  console.log(params);

  let content = (
    <div className={classes.container}>
      <div className={classes.card}>{props.children}</div>
    </div>
  );

  return <section>{content}</section>;
};

export default ProductDetail;
