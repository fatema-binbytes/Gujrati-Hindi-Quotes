import {combineReducers} from 'redux';
import quote from './quote';
import ui from './ui';

const allReducers = combineReducers({
  quote,
  ui
});
export default allReducers;
