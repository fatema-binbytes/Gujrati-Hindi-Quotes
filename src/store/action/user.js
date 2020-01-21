import actions from '../constant';
import ui from './ui';
import Immutable from 'immutable';
import constants from '../../config/constants';
import {POST} from '../../utils/api';

const userLogin = body => {
  return dispatch => {
    dispatch(ui.loading(true));
    POST(`${constants.API_URL}/auth/login`, body, null, null)
    .then(json => {
      if(json.success) {
        dispatch({
          type: actions.USER_LOGIN,
          payload: json.response,
        });
      dispatch(ui.loading(false));
      }
    })
  };
};

export default {
  userLogin,
};
