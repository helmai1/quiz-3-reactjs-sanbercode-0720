import React from 'react';
// Views Component
import Home from '../components/Home';
import Home2 from '../components/Home2';
import About from '../components/About';
import Movie from '../components/Movie';
import Login from '../components/Login/LoginForm';

// Router
import { Route, Router } from 'react-router'

const Routes = props => {
  return (
    <Router history={ props.history }>
    <div>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/home" component={ Home2 }/>
      <Route exact path="/about" component={ About }/>
      <Route exact path="/movie" component={ Movie }/>
      <Route exact path="/login" component={ Login }/>
    </div>
  </Router>
  );
};
export default Routes;
