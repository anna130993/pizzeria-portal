import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={`tables/booking/123`}>See booking</Link>
    <Link to={`tables/booking/new`}>Create new booking</Link>
    <Link to={`tables/events/456`}>See event</Link>
    <Link to={`tables/events/new`}>Create new event</Link>
  </div>
);

export default Tables;
