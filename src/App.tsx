import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
