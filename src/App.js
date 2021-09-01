import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './pages/router';

import './App.css';

import DefaultLayout from './layouts/default';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <DefaultLayout>
              <route.component></route.component>
            </DefaultLayout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
