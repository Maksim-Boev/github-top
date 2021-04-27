import { ERROR } from '../../constants/const';

const errorAction = (error) => ({
  type: ERROR,
  payload: error
});

export default errorAction;
