import types from '../actions/types';

const initalState = {
  list: null,
  selectedPortfolio: null,
};

export default portfolioReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_PORTFOLIOS:
      return {...state, list: action.payload};
    default:
      return state;
  }
};
