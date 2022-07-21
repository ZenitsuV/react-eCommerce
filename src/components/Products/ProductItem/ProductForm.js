import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from '../../UI/Input.module.css';
import classes from './ProductForm.module.css';

const ProductForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const decrement = () => {
    setCounter((c) => {
      if (c * 1 > 1) {
        return c * 1 - 1;
      } else {
        return c;
      }
    });
  };

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setCounter(parseInt(value));
  };

  console.log(counter);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length == 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={`amount_` + props.id}>Quantity</label>
        <div onClick={decrement} className={classes.decrement}>
          -
        </div>
        <input
          type="number"
          id={'amount_' + props.id}
          min="1"
          max="5"
          step="1"
          value={counter}
          onChange={inputChangeHandler}
        />
        <div onClick={increment} className={classes.increment}>
          +
        </div>
        <button>+ Add</button>
      </div>

      {!isAmountValid && <p>Please enter valid quantity 1 to 5.</p>}
    </form>
  );
};

export default ProductForm;
