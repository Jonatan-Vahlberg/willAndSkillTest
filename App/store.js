import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(reducers, {}, compose(applyMiddleware(thunk)));
