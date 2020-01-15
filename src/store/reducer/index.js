import {combineReducers} from 'redux';
import quote from './quote';
import ui from './ui';
import user from './user';

const allReducers = combineReducers({
  quote,
  ui,
  user,
});
export default allReducers;
