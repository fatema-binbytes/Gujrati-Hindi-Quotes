import actions from '../constant';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  IsLoading: false,
  EndQuotes: false
})

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      state = state.update('IsLoading', () => action.payload);
      break
    case actions.END_QUOTES:
      state = state.update('EndQuotes', () => action.payload);
      break
    default:
      break
  }
  return state
}

export default ui
