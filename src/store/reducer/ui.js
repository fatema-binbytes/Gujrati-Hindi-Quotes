import actions from '../constant';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  IsLoading: false,
})

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      state = state.update('IsLoading', () => action.payload);
      break
    default:
      break
  }
  return state
}

export default ui
