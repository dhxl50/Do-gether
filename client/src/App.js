import React from "react";
import LandingPage from "./pages/LandingPage.js";
import MainPage from "./pages/MainPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  typography: {
  "fontFamily": "MapoGoldenPier",
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
