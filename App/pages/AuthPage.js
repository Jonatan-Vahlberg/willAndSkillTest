import React from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../actions/userActions';

class AuthPage extends React.Component {
  componentDidMount() {
    this.props.authenticateUser(
      this.props.user.email,
      this.props.user.password,
    );
  }
  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {authenticateUser})(AuthPage);
