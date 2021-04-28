import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { setUsers } from '../actions/users';
import errorAction from '../actions/error';
import { FETCH_USERS } from '../../constants';

const getGitHubData = () => {
  return axios.post(
    `https://api.github.com/graphql`,
    {
      query: `
  {
    search(query: "location:kiev", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            name
            bio
            url
            email
            location
            avatarUrl
            login
          }
        }
      }
    }
  }
`
    },
    {
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_AUTH_KEY}`
      }
    }
  );
};

function* fetchUsersWorker() {
  try {
    const { data } = yield call(getGitHubData);
    yield put(setUsers(data.data.search.edges));
  } catch (error) {
    yield put(errorAction(error.message));
  }
}

function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}

export default usersWatcher;
