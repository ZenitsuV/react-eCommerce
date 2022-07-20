import React from 'react';
import classes from './HeartButton.module.css';

const HeartButton = () => {
  return (
    <div class={classes.container}>
      <div class={classes.heart}></div>
    </div>
  );
};

export default HeartButton;
