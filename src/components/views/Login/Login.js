import React from 'react';
import styles from './Login.module.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function togglePassword() {
  const type = document.getElementById('password').type;

  if(type==='password'){
    document.getElementById('password').type = 'text';
  } else {
    document.getElementById('password').type = 'password';
  }
}

const Login = () => (
  <div className={styles.component}>
    <Grid container justify='center' alignCenter='center'>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <form noValidate>
              <TextField required id='login' label='Login' variant='outlined' fullWidth margin='normal' />
              <TextField required id='password' label='Password' type='password' variant='outlined' fullWidth margin='normal' />
              <FormControlLabel control={<Checkbox onClick={togglePassword} color='primary' /> } label='Show password' />
              <Button className={styles.submit} variant='contained' color='primary' href='/panel'>Sign in</Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Login;
