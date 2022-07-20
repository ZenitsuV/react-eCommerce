import React, { Fragment } from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Online Shopping</h1>
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/805/189/original/paper-art-online-shopping-on-smart-phone-buy-sell-on-mobile-technology-marketing-illustration-for-cover-page-design-on-website-free-vector.jpg"
          alt="A table fullx of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
