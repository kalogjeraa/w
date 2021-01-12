import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/" component={Home} exact />
          <Route to="/about" component={About} />
        </Switch>
      </Router>  
    </>
  )
}