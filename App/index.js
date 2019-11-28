import React from 'react';
import {Provider} from 'react-redux';
import AuthPage from './pages/AuthPage';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
  }
}

export default App;
