import Axios from 'axios';
import types from './types';

const BASE_URL = 'https://beta.stockzoom.com/api';

export const authenticateUser = (email, password) => async dispatch => {
  const result = await Axios.post(`${BASE_URL}-token-auth/`, {
    password,
    email,
  });
  if (status == 200) {
    dispatch({type: types.GET_AUTH_TOKEN, payload: result.data.token});
  } else {
    dispatch({type: types.GET_AUTH_TOKEN_FAILED, payload: 'error'});
  }
};
