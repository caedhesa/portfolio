import React, { useState } from "react";

import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { AppBar } from "./components/AppBar";
import { Contact } from "./components/Contact";
import { BottomBar } from "./components/BottomBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Grid,
  Hidden,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import { clearTheme } from "./theme/clearTheme";
import { darkTheme } from "./theme/darkTheme";

function App() {
  function switchTheme() {
    setTheme(!theme);
  }

  const [theme, setTheme] = useState(true);
  const appliedTheme = responsiveFontSizes(
    createMuiTheme(theme ? darkTheme : clearTheme)
  );

  return (
    <Router>
      <ThemeProvider theme={appliedTheme}>
        <Grid container style={appliedTheme.custom.grid}>
          <Hidden smUp>
            <BottomBar switchTheme={switchTheme} />
          </Hidden>
          <Hidden xsDown>
            <Grid style={appliedTheme.custom.gridEnds} item xs={12}>
              <AppBar />
            </Grid>
            <Grid style={appliedTheme.custom.gridFluid} item xs={12}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/works">{/* <Works /> */}</Route>
                <Route path="/about">{/* <About /> */}</Route>
                <Route path="/contact">{/* <Contact /> */}</Route>
              </Switch>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid style={appliedTheme.custom.gridFluid} item xs={12}>
              <Home />
              {/* <Works />
              <About />
              <Contact /> */}
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <BottomBar switchTheme={switchTheme} />
          </Hidden>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
