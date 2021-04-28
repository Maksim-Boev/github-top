import { FETCH_USERS, SET_USERS } from '../../constants';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});

export const fetchUsers = () => ({ type: FETCH_USERS });
