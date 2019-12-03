import types from '../actions/types';
import mock_data from '../mock_data';

const initalState = {
  list: [],
  selectedPortfolio: null,
};

export default portfolioReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_PORTFOLIOS:
      return {...state, list: action.payload};
    case types.GET_SELECTED_PORTFOLIO:
      return {...state, selectedPortfolio: action.payload};
    case types.DESELECT_SELECTED_PORTFOLIO:
      return {...state, selectedPortfolio: null};
    default:
      return state;
  }
};
