import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {compose, withState} from 'recompose';

function Navigation({classes, value, setValue, children}) {
  return (
    <Fragment>
      {children(value)}
      <BottomNavigation value={value} onChange={(_e,v) => setValue(v)} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
      </BottomNavigation>
    </Fragment>    
  );
}

const styles = {
  root: {
    width: 500,
  },
};

export default compose(
  withState('value', 'setValue', 'recents'),
  withStyles(styles)
)(Navigation);
