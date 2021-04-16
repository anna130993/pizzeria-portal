import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderParams.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const orderParams = params => (
  <List dense disablePadding className={styles.component}>
    {Object.keys(params).map(key => (
      <ListItem key={key} dense disableGutters>
        <ListItemText className={styles.orderParams} primary={params[key].label + ':'} secondary={Object.values(params[key].options).join(', ')} />
      </ListItem>
    ))}
  </List>
);

orderParams.propTypes = {
  params: PropTypes.objectOf(PropTypes.object),
};

export default orderParams;
