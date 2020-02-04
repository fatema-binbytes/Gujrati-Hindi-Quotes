import actions from '../constant';
import ui from './ui';
import Immutable from 'immutable';
import constants from '../../config/constants';
import {POST} from '../../utils/api';

const userLogIn = body => {
  return dispatch => {
    // dispatch(ui.loading(true));
    POST(`${constants.API_URL}/auth/login`, body, null, null)
    .then(json => {
      if(json.success) {
        dispatch({
          type: actions.USER_LOGIN,
          payload: Immutable.fromJS(json.response),
        });
      // dispatch(ui.loading(false));
      }
    })
  };
};
const userLogOut = () => {
  return dispatch => {
    const body = {
      token: null,
      user: {
        id: null,
        name: 'Quote-World',
        email: 'where you can find all types of Quotes',
        profile_url: null,
      },
    }
    // dispatch(ui.loading(true));
    dispatch({
      type: actions.USER_LOGIN,
      payload: Immutable.fromJS(body),
    });
    // dispatch(ui.loading(false));
    
  };
}
export default {
  userLogIn,
  userLogOut
};
