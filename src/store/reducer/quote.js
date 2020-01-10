import actions from '../constant';
import Immutable from 'immutable';

const init = Immutable.fromJS({
  hindiQuotes: [],
  gujratiQuotes: [],
});
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_HINDI_QUOTES:
      return state.update('hindiQuotes', () => action.payload);
      break;
    case actions.GET_GUJRATI_QUOTES:
      return state.update('gujratiQuotes', () => action.payload);
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
