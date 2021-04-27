import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersItem from './components/UsersItem';
import setUsers from './store/actions/users';
import Error from './components/Error';

const App = memo(() => {
  const { users, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  return (
    <>
      {error && <Error error={error} />}
      {users &&
        users.map(({ node: user }) => <UsersItem key={user.id} data={user} />)}
    </>
  );
});

export default App;
