import types from '../types';

const initialState = {
  loading: false,
  data: [],
  errorMessage: null
};

export const productPriceListReducer = (state, action) => {
  if (typeof state === 'undefined') {
    state = initialState;
  }
  const { type, payload } = action;
  switch (type) {
    case types.PRODUCT_PRICE_LIST_REQUEST:
    case types.ADD_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.PRODUCT_PRICE_LIST_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload]
      };
    case types.EDIT_PRODUCT_SUCCESS:
      const prod = state.data.filter(item => item.id !== payload.id);
      const item = state.data.find(item => item.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [{ ...item, prices: [...item.prices, payload.prices] }, ...prod]
      };
    case types.DELETE_PRODUCT_SUCCESS:
      state.data.splice(state.data.indexOf(payload), 1);
      return {
        ...state,
        loading: false,
        data: [...state.data]
      };
    case types.PRODUCT_PRICE_LIST_FAILURE:
    case types.ADD_PRODUCT_FAILURE:
    case types.EDIT_PRODUCT_FAILURE:
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, errorMessage: payload };
    default:
      return state;
  }
};
