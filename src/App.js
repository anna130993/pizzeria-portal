import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import SingleEvent from './components/views/SingleEvent/SingleEvent';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/WaiterContainer';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    //*secondary: {main: '#11cb5f'},
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`/`} component={Dashboard} />
              <Route exact path={`/login`} component={Login} />
              <Route exact path={`/tables`} component={Tables} />
              <Route exact path={`/tables/booking/new`} component={NewBooking} />
              <Route exact path={`/tables/booking/:id`} component={Booking} />
              <Route exact path={`/tables/events/new`} component={NewEvent} />
              <Route exact path={`/tables/events/:id`} component={SingleEvent} />
              <Route exact path={`/waiter`} component={Waiter} />
              <Route exact path={`/waiter/order/new`} component={NewOrder} />
              <Route exact path={`/waiter/order/:id`} component={Order} />
              <Route exact path={`/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
