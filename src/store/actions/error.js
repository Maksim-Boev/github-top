import { ERROR } from '../../constants';

const errorAction = (error) => ({
  type: ERROR,
  payload: error
});

export default errorAction;
