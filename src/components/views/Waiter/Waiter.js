import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter</h2>
    <Link to={`waiter/order/123`}>See order</Link>
    <Link to={`waiter/order/new`}>Create new order</Link>
  </div>
);

export default Waiter;
