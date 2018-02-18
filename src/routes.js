import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/views/home';
import Partnership from './components/views/partnership';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/partnership' component={Partnership} />
    <Route path='*' render={() => <Redirect to='/' />} />
  </Switch>
);

export default Routes;
