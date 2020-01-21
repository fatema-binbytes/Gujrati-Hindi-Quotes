import actions from '../constant';
import Immutable from 'immutable';

const init = {
  info: null,
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      state = Object.assign({}, state.info, action.payload)
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
