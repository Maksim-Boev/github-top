import './App.css';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import GET_USERS from './constants/getUsers';
import UsersItem from './components/UsersItem';
import setUsers from './store/actions/users';

const App = () => {
  const { data } = useQuery(GET_USERS);
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(data && data.search.edges));
  }, [data]);

  return (
    <>
      {users &&
        users.map(({ node: user }) => <UsersItem key={user.id} data={user} />)}
    </>
  );
};

export default App;
