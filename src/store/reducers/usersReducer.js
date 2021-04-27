import { ERROR, SET_USERS } from '../../constants/const';

const initialState = {
  users: [],
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
