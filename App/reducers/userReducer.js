import types from '../actions/types';

const initalState = {
  email: 'warren.buffet@willandskill.se',
  password: 'berkshirehathaway2018',
  token: null,
};

export default userReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_AUTH_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};
