import React from 'react';
import LandingPage from './pages/LandingPage.js';
import MainPage from './pages/MainPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage}/> 
          <Route exact path="/main" component={MainPage}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;