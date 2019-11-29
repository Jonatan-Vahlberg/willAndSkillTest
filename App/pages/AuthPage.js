import React from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../actions';
import {isUndefiendOrNull} from '../functions';
import FluxRouter from '../Router';
import Spinner from '../components/Spinner';

class AuthPage extends React.Component {
  componentDidMount() {
    this.props.authenticateUser(
      this.props.user.email,
      this.props.user.password,
    );
  }
  render() {
    console.log(this.props);
    if (isUndefiendOrNull(this.props.user) || this.props.user.token === null)
      return <Spinner />;
    else {
      return <FluxRouter />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {authenticateUser})(AuthPage);
