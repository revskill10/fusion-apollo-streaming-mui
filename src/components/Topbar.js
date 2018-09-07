
import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'fusion-plugin-react-router';
import styles from '../styles/topBar.js';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const TopBar = ({classes}) => 
  <Fragment>
    <CssBaseline />
    <div className={classes.layout}>
      <Toolbar className={classes.toolbarMain}>
        <Link to={`/`} className={classes.link}>
          Home
        </Link>
        <Link to={`/gallery`} className={classes.link}>
          Gallery
        </Link>

        <Link to={`/pricing`} className={classes.link}>
          Pricing
        </Link>
        <Typography
          variant="headline"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Blog
        </Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>

        <Link to={`/login`} className={classes.link}>
          Login
        </Link>

        <Link to={`/admin`} className={classes.link}>
          Admin
        </Link>
      </Toolbar>
      <Toolbar variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Typography color="inherit" noWrap key={section}>
            {section}
          </Typography>
        ))}
      </Toolbar>
    </div>
  </Fragment>

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);