import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

class FluxRouter extends React.Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene
            key="list"
            title="List of your portfolios"
            component={ListPage}
          />
          <Scene key="detail" component={DetailPage} />
        </Stack>
      </Router>
    );
  }
}

export default FluxRouter;
