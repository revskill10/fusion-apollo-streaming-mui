// @flow
import SignIn from '../components/Login.js';
import withStyles from '@material-ui/core/styles/withStyles';
import {lifecycle} from 'recompose';
import {styles as signInStyles} from '../styles/signInStyles';
import {withTheme} from '@material-ui/core/styles';

const WrappedSignIn = lifecycle({
  componentDidMount() {
    console.log(this.props.theme.direction);
  }
})(SignIn);

export default withTheme()(withStyles(signInStyles)(WrappedSignIn));
