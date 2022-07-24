import React from 'react';
import classes from './HeartButton.module.css';

const HeartButton = ({ onHeartClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heart} onClick={onHeartClick}></div>
    </div>
  );
};

export default HeartButton;
