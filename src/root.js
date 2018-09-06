// @flow
import React from 'react';
import {Route, Switch, Link} from 'fusion-plugin-react-router';
import { withStyles } from '@material-ui/core/styles';
import Home from './pages/home.js';
import Admin from './pages/admin.js';
import PageNotFound from './pages/pageNotFound.js';
import Login from './pages/login.js';
import Pricing from './pages/pricing.js';
import Gallery from './pages/gallery.js';
import AppBar from '@material-ui/core/AppBar';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Root({classes}) {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/gallery" component={Gallery} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default withStyles(styles)(Root);
