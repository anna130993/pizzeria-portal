import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleEvent.module.scss';

const SingleEvent = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Event</h2>
      <h3>Event id: {id}</h3>
    </div>
  );
};

SingleEvent.propTypes = {
  match: PropTypes.object,
};


export default SingleEvent;
