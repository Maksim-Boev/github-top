import { createStore } from 'redux';
import users from './reducers/users';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  users,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
