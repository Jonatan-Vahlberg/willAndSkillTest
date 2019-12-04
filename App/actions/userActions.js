import Axios from 'axios';
import types from './types';
import {ToastAndroid, Platform} from 'react-native';

const BASE_URL = 'https://beta.stockzoom.com/api';

export const authenticateUser = (email, password) => async dispatch => {
  try {
    const result = await Axios.post(`${BASE_URL}-token-auth/`, {
      password,
      email,
    });

    if (result.status == 200) {
      dispatch({type: types.GET_AUTH_TOKEN, payload: result.data.token});
    } else {
      dispatch({type: types.GET_AUTH_TOKEN_FAILED, payload: 'error'});
    }
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = async (token, dispatch) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show('Refreshing Token');
  }
  const result = await Axios.post(`${BASE_URL}-token-refresh/`, {
    token,
  });
  console.log(result);

  if (result.status == 200) {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Token Refreshed please atempt call again');
    }
    dispatch({type: types.GET_AUTH_TOKEN, payload: result.data.token});
  } else {
    dispatch({type: types.GET_AUTH_TOKEN_FAILED, payload: 'error'});
  }
};
