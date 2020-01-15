import actions from '../constant';
import ui from './ui';
import Immutable from 'immutable';
import constants from '../../config/constants';
import {POST} from '../../utils/api';

const userLogin = body => {
  return dispatch => {
    dispatch(ui.loading(true));
    // POST(`${constants.API_URL}/user`, body, null, null, json => {
    //   if (json) {
        dispatch({
          type: actions.USER_LOGIN,
          payload:Immutable.fromJS(body),
        });
        dispatch(ui.loading(false));
    //   }
    // });
  };
};

export default {
  userLogin,
};
