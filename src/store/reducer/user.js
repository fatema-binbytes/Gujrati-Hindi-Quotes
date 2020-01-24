import actions from '../constant';
import Immutable from 'immutable';

const init = {
  token:null,
    user:{
      id: null,
      name: 'Quote-World',
      email: 'were you can find all types of Quotes',
      profile_url: null,
    },
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      state = Object.assign({}, state, action.payload)
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
