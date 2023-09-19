import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import NotFound from './views/not-found';
import Landingpage from './views/landingpage';
import ContactPage from './views/ContactPage';
import PricingPage from './views/PricingPage';
import SigninPage from './views/SigninPage';
import Game from './views/Game';
const App = () => {
  return (
    <Router>
      <div>
        {/* Define your routes here */}
        <Switch>
          {/* Landing Page */}
          <Route component={Landingpage} exact path="/" />
          
          {/* Contact Page */}
          <Route component={ContactPage} path="/contact" />

          {/* Pricing Page */}
          <Route component={PricingPage} path="/pricing" />

          {/* Signin Page */}
          <Route component={SigninPage} path="/signin" />
          
          {/* Signin Page */}
          <Route component={Game} path="/game" />

          {/* Not Found Page (404) - Place it at the end */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
