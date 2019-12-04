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
            rightButtonImage={require('./media/refresh.png')}
            onRight={() => console.log('right init')}
            component={ListPage}
          />
          <Scene
            key="detail"
            component={DetailPage}
            rightButtonImage={require('./media/refresh.png')}
            onRight={() => console.log('right init')}
          />
        </Stack>
      </Router>
    );
  }
}

export default FluxRouter;
