import axios from 'axios';
import types from '../types';

export const fetchPriceList = () => async dispatch => {
  dispatch({ type: types.PRODUCT_PRICE_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      'http://www.mocky.io/v2/5c3e15e63500006e003e9795',
      {
        withCredentials: true
      }
    );
    dispatch({
      type: types.PRODUCT_PRICE_LIST_SUCCESS,
      payload: data.products
    });
  } catch (error) {
    dispatch({ type: types.PRODUCT_PRICE_LIST_FAILURE });
  }
};

export const addProduct = product => async dispatch => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  if (!product) {
    dispatch({ type: types.ADD_PRODUCT_FAILURE });
  } else {
    dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: product });
  }
};

export const editProduct = payload => async dispatch => {
  dispatch({ type: types.EDIT_PRODUCT_REQUEST });
  if (!payload) {
    dispatch({ type: types.EDIT_PRODUCT_FAILURE });
  } else {
    dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload });
  }
};

export const deleteProduct = product => async dispatch => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  if (!product) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE });
  } else {
    dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: product });
  }
};
