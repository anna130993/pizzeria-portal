import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styles from './ChangeAmount.module.scss';

const ChangeAmount = ({value, isReadOnly, min, max}) => {
  if (isReadOnly) {
    return (
      <Typography>{value}</Typography>
    );
  } else {
    return (
      <TextField className={styles.input} value={value} type="number" inputProps={{ min, max }} />
    );
  }
};

export default ChangeAmount;
