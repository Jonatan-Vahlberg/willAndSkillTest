import Axios from 'axios';
import types from './types';

const BASE_URL = 'https://beta.stockzoom.com/api';

export const getMyPortfolioList = token => async dispatch => {
  const result = await Axios.get(`${BASE_URL}/v1/me/portfolios/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (result.status === 200) {
    dispatch({type: types.GET_PORTFOLIOS, payload: result.data.results});
  }

  console.log(result);
};
