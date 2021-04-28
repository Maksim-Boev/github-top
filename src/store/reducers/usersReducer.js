import { ERROR, SET_USERS } from '../../constants';

const initialState = {
  users: [],
  error: null
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload
      };
    case ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default usersReducer;
