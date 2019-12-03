import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {authenticateUser} from '../actions';
import {isUndefiendOrNull} from '../functions';
import FluxRouter from '../Router';
import Spinner from '../components/Spinner';
import PageComponent from '../components/PageComponent';

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
      return (
        <PageComponent style={this.generateStyles().container}>
          <Spinner />
        </PageComponent>
      );
    else {
      return <FluxRouter />;
    }
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {authenticateUser})(AuthPage);
