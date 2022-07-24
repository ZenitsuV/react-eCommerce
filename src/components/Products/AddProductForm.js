import React, { useRef } from 'react';
import classes from './AddProductForm.module.css';

const AddProductForm = () => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {};

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Product ID</label>
          <input type="text" required id="id" disabled />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Product Price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Product Type</label>
          <input type="text" required id="type" ref={typeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
