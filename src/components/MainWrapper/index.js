import React from 'react';
import store from '../../redux/store';
import routes from '../../config/routes';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainWrapper = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              {/*<li key={number.toString()}>*/}
              {/*    {number}*/}
              {/*</li>*/}

              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </Provider>
  );
};

export default MainWrapper;
