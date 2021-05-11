import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (process.env.NODE_ENV === 'development'
  ? createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
  : createStore(reducers, applyMiddleware(thunk)));
