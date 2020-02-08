import actions from '../constant';
import Immutable from 'immutable';

const init = Immutable.fromJS({
  info : {
    token:null,
    user: {
      id: null,
      name: 'SMS - World',
      email: 'where you can find all types of SMS',
      profile_url: null,
    },
  },
});
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.USER_LOGIN :
     return state.set('info', action.payload)
    default:
      break;
  }
  return state;
};
export default reducer;
