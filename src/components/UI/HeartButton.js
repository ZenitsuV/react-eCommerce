import React from 'react';
import classes from './HeartButton.module.css';

const HeartButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heart}></div>
    </div>
  );
};

export default HeartButton;
