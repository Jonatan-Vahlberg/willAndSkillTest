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
};

export const getSelectedPortfolio = (token, alias) => async dispatch => {
  const result = await Axios.get(`${BASE_URL}/v1/me/portfolios/${alias}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(result);

  if (result.status === 200) {
    dispatch({type: types.GET_SELECTED_PORTFOLIO, payload: result.data});
  } else {
    dispatch({type: types.GET_SELECTED_PORTFOLIO_FAILED});
  }
};

export const deselectPortfolio = () => {
  return {type: types.DESELECT_SELECTED_PORTFOLIO};
};
