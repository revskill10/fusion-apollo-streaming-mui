// @flow
import React from 'react';
import {Route} from 'fusion-plugin-react-router';
import { withStyles } from '@material-ui/core/styles';
import Home from './pages/home.js';
import Admin from './pages/admin.js';
import PageNotFound from './pages/pageNotFound.js';
import Login from './pages/login.js';
import Pricing from './pages/pricing.js';
import Gallery from './pages/gallery.js';
import {spring, AnimatedSwitch} from 'react-router-transition';

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
  "route_wrapper": {
    "position": "relative"
  },
  "route_wrapper___div": {
    "position": "absolute"
  }
};

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function Root({classes}) {
  return (
    <div className={classes.root}>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className={classes["route-wrapper"]}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/gallery" component={Gallery} />
        <Route component={PageNotFound} />
      </AnimatedSwitch>
    </div>
  )
}

export default withStyles(styles)(Root);
