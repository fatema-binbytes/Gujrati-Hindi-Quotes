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
    case actions.GET_GUJRATI_QUOTES:
      return state.update('gujratiQuotes', () => action.payload);
    default:
      break;
  }
  return state;
};
export default reducer;
