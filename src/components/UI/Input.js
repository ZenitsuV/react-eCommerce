import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <div className={classes.decrement}>-</div>
        <input ref={ref} {...props.input} />
        <div className={classes.increment}>+</div>
        <button>+ Add</button>
      </div>
    </>
  );
});

export default Input;
