import React from 'react';
import store from "../../redux/store";
import routes from "../../config/routes";
import {Provider} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const MainWrapper = () => {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map(route => (
              <Route exact path={route.path}>
                <route.component/>
              </Route>
            ))}
          </Switch>
        </Router>
      </Provider>
  );
};

export default MainWrapper;