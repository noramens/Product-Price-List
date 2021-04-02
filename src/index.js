import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ProductPriceListContainer } from '../src/duck/ProductPriceListContainer';
import { createLogger } from 'redux-logger';
import { productPriceListReducer } from '../src/duck/productPriceListReducer';

const _DEV_ = process.env.NODE_ENV === 'development';
const middlewares = [ReduxThunk];
const logger = createLogger({ collapsed: true });
if (_DEV_) middlewares.push(logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  productPriceListReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

const App = () => (
  <Provider store={store}>
    <ProductPriceListContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
