import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Router>  
    </>
  )
}
